import {Component, OnInit} from '@angular/core';
import {ROLES, User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/user/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
    user?: User
    roles = ROLES;
    userRole?: string;

    constructor(private userService: UserService) {}
    ngOnInit() {
        console.log(this.roles)
        this.userService.findOne(localStorage.getItem('user') as string)
            .subscribe(user => {
                this.user = user;
                this.userRole = this.roles[this.user?.admin ? 'ADMIN' : 'USER'];
            })
    }

    toAdmin() {
    }

    toUser() {

    }

    update() {

    }
}
