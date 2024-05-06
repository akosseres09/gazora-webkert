import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";
import {passWordCompareValidator} from "../../shared/validators/passWordCompareValidator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    signupForm = new FormGroup({
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
        ])
    });

    loading: boolean = false;

    constructor (private router: Router,private auth: AuthService) {
    }

    register() {
        const email = this.signupForm.get('email');
        const password = this.signupForm.get('pw')?.get('password');
        const rePw = this.signupForm.get('pw')?.get('rePassword');

        if (!email?.valid || !password?.valid || !rePw?.valid) {
            return;
        }

        this.auth.signup(email.value as string, password.value as string)
            .then(userCred => {
                this.router.navigateByUrl('/')
            })
            .catch(err => {
                console.error(err);
            })

    }
}
