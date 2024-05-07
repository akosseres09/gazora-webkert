import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Address} from "../../../shared/models/Address";
import {AddressService} from "../../../shared/services/address/address.service";
import {Location} from "@angular/common";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {
    form = new FormGroup({
        country: new FormControl('', [
            Validators.required
        ]),
        state: new FormControl('',[
            Validators.required
        ]),
        city: new FormControl('',[
            Validators.required
        ]),
        street: new FormControl('',[
            Validators.required
        ]),
        houseNumber: new FormControl('',[
            Validators.required,
        ]),
        floor: new FormControl(''),
        doorNumber: new FormControl('')
    });

    constructor(private adService: AddressService, private location: Location, private snackBar: SnackbarService) {}

    submit() {
        if (!this.form.valid) {
            return;
        }

        const address: Address = {
            uid: localStorage.getItem('user') as string,
            date: Timestamp.fromDate(new Date()),
            country: this.form.get('country')?.value as string,
            state: this.form.get('state')?.value as string,
            city: this.form.get('city')?.value as string,
            street: this.form.get('street')?.value as string,
            houseNumber: this.form.get('houseNumber')?.value as string,
            floor: this.form.get('floor')?.value as string,
            doorNumber: this.form.get('doorNumber')?.value as string
        };
        this.adService.create(address).then(() => {
            this.snackBar.openSnackbar('New Address created!');
        }).catch(err =>{
            this.snackBar.openSnackbar('Failed to create new Address!', [
                'error'
            ]);
            console.error(err)
        });
    }

    goBack() {
        this.location.back();
    }
}
