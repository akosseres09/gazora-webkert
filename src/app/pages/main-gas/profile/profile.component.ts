import { Component, OnInit } from '@angular/core';
import { ADMIN, ROLES, USER, User } from "../../../shared/models/User";
import { UserService } from "../../../shared/services/user/user.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogComponent } from "../../../shared/dialog/dialog/dialog.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {AddSheetComponent} from "../../../shared/sheet/add-sheet/add-sheet.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
    user?: User
    roles = ROLES;
    userRole?: string;

    constructor(private userService: UserService, private snackBar: MatSnackBar, private dialog: MatDialog, private bottomSheet: MatBottomSheet) {}
    ngOnInit() {
        this.userService.findOne(localStorage.getItem('user') as string)
            .subscribe(user => {
                this.user = user;
                this.userRole = this.roles[this.user?.admin ? 'ADMIN' : 'USER'];
            })
    }

    openSnackbar(message: string, panel: Array<string> = []) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            panelClass: panel
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
            this.userService.update(this.user).then(() => {
                this.openSnackbar('Upgraded To Admin!');
            }).catch(err => {
                this.openSnackbar('Failed to Update Profile!', [
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
                    this.openSnackbar('Demoted to User!');
                })
                .catch(err => {
                    this.openSnackbar('Failed To Update Profile!', [
                        'error'
                    ]);
                    console.log(err)
                });
        }
    }

    update(user: User) {
        this.dialog.closeAll();
        this.userService.update(user).then(() => {
            this.openSnackbar('Updated Profile!', [
                'error'
            ]);
        }).catch(err => {
            this.openSnackbar('Failed To Update Profile!', [
                'error'
            ])
            console.error(err)
        });
    }
}
