import {Component, OnDestroy, OnInit} from '@angular/core';
import { ADMIN, ROLES, USER, User } from "../../../shared/models/User";
import { UserService } from "../../../shared/services/user/user.service";
import {Subscription} from "rxjs";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../shared/services/dialog/dialog.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {
    user?: User
    roles = ROLES;
    userRole?: string;
    sub?: Subscription;

    constructor(private userService: UserService, private snackBar: SnackbarService,
                private dialog: DialogService) {}
    ngOnInit() {
        this.sub = this.userService.findOne(localStorage.getItem('user') as string)
            .subscribe(user => {
                this.user = user;
                this.userRole = this.roles[this.user?.admin ? 'ADMIN' : 'USER'];
            })
    }

    openDialog() {
        this.dialog.openDialog(
            {
                dialog: this.dialog,
                profileComponent: this,
                user: this.user,
            }
        );
    }

    toAdmin() {
        if (this.user) {
            this.user.admin = ADMIN;
            this.userService.update(this.user).then(() => {
                this.snackBar.openSnackbar('Upgraded To Admin!');
            }).catch(err => {
                this.snackBar.openSnackbar('Failed to Update Profile!', [
                    'error'
                ])
                console.log(err)
            });
        }
    }

    toUser() {
        if (this.user) {
            this.user.admin = USER;
            this.userService.update(this.user)
                .then(() => {
                    this.snackBar.openSnackbar('Demoted to User!');
                })
                .catch(err => {
                    this.snackBar.openSnackbar('Failed To Update Profile!', [
                        'error'
                    ]);
                    console.log(err)
                });
        }
    }

    update(user: User) {
        this.dialog.closeAll();
        this.userService.update(user).then(() => {
            this.snackBar.openSnackbar('Updated Profile!');
        }).catch(err => {
            this.snackBar.openSnackbar('Failed To Update Profile!', [
                'error'
            ])
            console.error(err)
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
