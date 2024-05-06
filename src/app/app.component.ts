import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "./shared/services/auth/auth.service";
import {MatSidenav} from "@angular/material/sidenav";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'MVM NEXT';
    page: string = '';

    user?: firebase.default.User | null
    routes: Array<string> = new Array<string>();
    constructor(private router: Router, private auth: AuthService) {}


    ngOnInit() {
        this.routes = this.router.config.map(config => config.path) as Array<string>;

        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
            const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
            if (this.routes.includes(currentPage)) {
                this.page = currentPage;
            }
        });

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
                localStorage.setItem('user', 'null');
                this.router.navigateByUrl('/');
            })
            .catch(err => {
                console.error(err);
            });
    }
}
