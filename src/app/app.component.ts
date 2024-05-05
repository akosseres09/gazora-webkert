import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./shared/services/auth/auth.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'MVM NEXT';

    user?: firebase.default.User | null
    routes: Array<string> = new Array<string>();
    constructor(private router: Router, private auth: AuthService) {}


    ngOnInit() {
        this.routes = this.router.config.map(config => config.path) as Array<string>;

        this.auth.getUser().subscribe(user =>{
            this.user = user;
            if (user) {
                localStorage.setItem('user', user?.uid);
            }
        });
    }

    onSidenavClose(event: any, sidenav: MatSidenav) {
        if (event === true) {
            sidenav.close();
        }
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
