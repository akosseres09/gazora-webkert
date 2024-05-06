import { Component, OnInit } from '@angular/core';
import { ADMIN, ROLES, USER, User } from "../../../shared/models/User";
import { UserService } from "../../../shared/services/user/user.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogComponent } from "../../../shared/dialog/dialog/dialog.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
    user?: User
    roles = ROLES;
    userRole?: string;

    constructor(private userService: UserService, private snackBar: MatSnackBar, private dialog: MatDialog) {}
    ngOnInit() {
        console.log(this.roles)
        this.userService.findOne(localStorage.getItem('user') as string)
            .subscribe(user => {
                this.user = user;
                this.userRole = this.roles[this.user?.admin ? 'ADMIN' : 'USER'];
            })
    }

    openSnackbar() {
        this.snackBar.open('Updated Profile!', 'Close', {
            duration: 3000
        });
    }

    openDialog() {
        return this.dialog.open(DialogComponent, {
            width: 'fill-content',
            data: {
                dialog: this.dialog,
                profileComponent: this,
                user: this.user,
            }
        });
    }

    toAdmin() {
        if (this.user) {
            this.user.admin = ADMIN;
            this.userService.update(this.user);
            this.openSnackbar();
        }
    }

    toUser() {
        if (this.user) {
            this.user.admin = USER;
            this.userService.update(this.user);
            this.openSnackbar();
        }
    }

    update(user: User) {
        this.userService.update(user);
        this.dialog.closeAll();
    }
}
