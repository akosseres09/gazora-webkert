import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ])
    });

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
            .then(_  => {
                this.loading = false;
                this.router.navigateByUrl('/main');
            })
            .catch(err => {
                console.error(err.message);
                this.loading = false;
            });
    }
}
