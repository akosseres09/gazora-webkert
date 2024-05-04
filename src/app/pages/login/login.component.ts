import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{
    loginForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.min(6),
        ]),
        rePassword: new FormControl('', [
            Validators.required,
            Validators.min(6)
        ])
    });

    loginSubscription?: Subscription;
    loading: boolean = false;

    constructor(private router: Router, private auth: AuthService) {}

    async login() {
        this.loading = true;
        const email = this.loginForm.get('email');
        const password = this.loginForm.get('password');

        if (!email?.valid || !password?.valid) {
            this.loading = false;
            return;
        }

        this.auth.login(email?.value as string, password?.value as string)
            .then(userCred => {
                console.log(userCred)
                this.loading = false;
            })
            .catch(err => {
                console.error(err.message);
                this.loading = false;
            });
    }

    ngOnDestroy() {
        this.loginSubscription?.unsubscribe();
    }
}
