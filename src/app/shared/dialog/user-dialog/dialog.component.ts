import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {User} from "../../models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileComponent} from "../../../pages/main-gas/profile/profile.component";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
    user: User = this.data.user;
    dialog: MatDialog = this.data.dialog;
    profileComponent: ProfileComponent = this.data.profileComponent;
    form: FormGroup = new FormGroup({
        username: new FormControl(this.user.username, [
            Validators.required
        ]),
        name: new FormGroup({
            firstName: new FormControl(this.user.name?.first),
            lastName: new FormControl(this.user.name?.last)
        })
    })
    constructor (@Inject(MAT_DIALOG_DATA) public data: any) {}


    save() {
        const username = this.form.get('username');
        const first = this.form.get('name.firstName');
        const last = this.form.get('name.lastName');
        if (!username?.valid) {
            return;
        }
        this.user.username = username.value as string;
        this.user.name = {
            first: first?.value as string,
            last: last?.value as string
        };
        this.profileComponent.update(this.user);
    }
}
