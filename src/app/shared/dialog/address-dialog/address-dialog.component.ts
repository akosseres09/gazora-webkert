import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Address} from "../../models/Address";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressListComponent} from "../../../pages/main-gas/address-list/address-list.component";

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.css'
})
export class AddressDialogComponent {
    address: Address = this.data.address;
    dialog: MatDialog = this.data.dialog;
    component: AddressListComponent = this.data.component;

    form = new FormGroup({
        country: new FormControl(this.address.country, [
            Validators.required
        ]),
        state: new FormControl(this.address.state,[
            Validators.required
        ]),
        city: new FormControl(this.address.city,[
            Validators.required
        ]),
        street: new FormControl(this.address.street,[
            Validators.required
        ]),
        houseNumber: new FormControl(this.address.houseNumber,[
            Validators.required,
        ]),
        floor: new FormControl(this.address.floor),
        doorNumber: new FormControl(this.address.doorNumber)
    });

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    save() {
        if (!this.form.valid) {
            return;
        }

        this.address.country = this.form.get('country')?.value as string;
        this.address.state = this.form.get('state')?.value as string;
        this.address.city = this.form.get('city')?.value as string;
        this.address.street = this.form.get('street')?.value as string;
        this.address.houseNumber = this.form.get('houseNumber')?.value as string;
        this.address.floor = this.form.get('floor')?.value as string;
        this.address.doorNumber = this.form.get('doorNumber')?.value as string;

        this.component.edit(this.address);
    }
}
