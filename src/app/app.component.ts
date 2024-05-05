import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./shared/services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'MVM NEXT';

    user?: firebase.default.User | null

    constructor(private router: Router, private auth: AuthService) {}


    ngOnInit() {
        this.auth.getUser().subscribe(user =>{
            this.user = user;
            if (user) {
                localStorage.setItem('user', user?.uid);
            }
        });
    }

    logout() {
        this.auth.logout()
            .then(() => {
                localStorage.removeItem('user');
            })
            .catch(err => {
                console.error(err);
            });
    }
}
