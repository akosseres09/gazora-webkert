import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";
import {passWordCompareValidator} from "../../shared/validators/passWordCompareValidator";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user/user.service";
import {USER, User} from "../../shared/models/User";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    signupForm = new FormGroup({
        username: new FormControl('', [
            Validators.minLength(6),
            Validators.required
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        pw: new FormGroup({
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ]),
            rePassword: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ])
        }, [
            passWordCompareValidator('password', 'rePassword')
        ]),
        name: new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
        })
    });
    loading: boolean = false;
    constructor (private router: Router,private auth: AuthService, private userService: UserService) {}

    register() {
        const email = this.signupForm.get('email');
        const password = this.signupForm.get('pw')?.get('password');
        const rePw = this.signupForm.get('pw')?.get('rePassword');
        const username = this.signupForm.get('username');
        const firstName = this.signupForm.get('name.firstName');
        const lastName = this.signupForm.get('name.lastName');

        if (!email?.valid || !password?.valid || !rePw?.valid || !username?.valid) {
            return;
        }

        this.auth.signup(email.value as string, password.value as string)
            .then(userCred => {
                const user: User = {
                    uid: userCred.user?.uid as string,
                    email: email.value as string,
                    username: username.value as string,
                    name: {
                        first: firstName?.value as string,
                        last: lastName?.value as string
                    },
                    admin: USER
                };
                this.userService.create(user).then(() => {
                    this.router.navigate(['/main']);
                }).catch(err => {
                    console.error(err);
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
}
