import {Component, Inject} from '@angular/core';
import {GasMeter} from "../../models/gasMeter";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MainGasComponent} from "../../../pages/main-gas/main-gas.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address} from "../../models/Address";
import {MainComponent} from "../../../pages/main-gas/main/main.component";

@Component({
  selector: 'app-meter-dialog',
  templateUrl: './meter-dialog.component.html',
  styleUrl: './meter-dialog.component.css'
})
export class MeterDialogComponent {
    meter: GasMeter = this.data.meter;
    dialog: MatDialog = this.data.dialog;
    addresses: Array<Address> = this.data.addresses;
    component: MainComponent = this.data.component;

    form = new FormGroup({
        address: new FormControl(this.meter.address.id, [
            Validators.required
        ]),
        currentPosition: new FormControl(this.meter.currentPosition, [
            Validators.required
        ]),
        name: new FormControl(this.meter.name, [
            Validators.required
        ])
    })

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    save() {
        if (!this.form.valid) {
            return;
        }
        const address = this.addresses?.filter(address => {
            return address.id === this.form.get('address')?.value;
        });
        const currentPos = this.form.get('currentPosition')?.value;
        const name = this.form.get('name')?.value;

        this.meter.address = address[0];
        this.meter.name = name as string;
        this.meter.lastPosition = this.meter.currentPosition;
        this.meter.currentPosition = currentPos as number;

        this.component.edit(this.meter);
    }
}
