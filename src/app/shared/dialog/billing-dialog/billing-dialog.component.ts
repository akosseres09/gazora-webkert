import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {BillingInfo} from "../../models/BillingInfo";
import {Address} from "../../models/Address";
import {BillingListComponent} from "../../../pages/main-gas/billing-list/billing-list.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-billing-dialog',
  templateUrl: './billing-dialog.component.html',
  styleUrl: './billing-dialog.component.css'
})
export class BillingDialogComponent {
    billing: BillingInfo = this.data.billing;
    dialog: MatDialog = this.data.dialog;
    addresses: Array<Address> = this.data.addresses;
    component: BillingListComponent = this.data.component;

    form = new FormGroup({
        address: new FormControl(this.billing.address.id, [
            Validators.required
        ]),
    });

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    save() {
        if (!this.form.valid) {
            return;
        }
        const value = this.form.get('address')?.value as string;

        const address = this.addresses.filter(address => {
            return address.id === value;
        });

        this.billing.address = address[0];

        this.component.edit(this.billing);
    }
}
