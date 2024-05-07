import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GasMeterService} from "../../../shared/services/gasMeter/gas-meter.service";
import {Address} from "../../../shared/models/Address";
import {AddressService} from "../../../shared/services/address/address.service";
import {Subscription} from "rxjs";
import {Location} from "@angular/common";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {GasMeter} from "../../../shared/models/gasMeter";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-add-meter',
  templateUrl: './add-meter.component.html',
  styleUrl: './add-meter.component.css'
})
export class AddMeterComponent implements OnInit, OnDestroy {
    addresses?: Array<Address>;
    sub?: Subscription
    form = new FormGroup({
        name: new FormControl('', [
            Validators.required
        ]),
        address: new FormControl('', [
            Validators.required
        ]),
    });

    constructor(private meterService: GasMeterService, private adService: AddressService,
                private location: Location, private snackBar: SnackbarService) {}

    ngOnInit() {
        const uid: string = localStorage.getItem('user') as string;
        this.sub = this.adService.findAllToUid(uid).subscribe(addresses => {
            this.addresses = addresses;
        });
    }

    submit() {
        if (!this.form.valid) {
            return;
        }

        const address = this.addresses?.filter(address => {
            return address.id === this.form.get('address')?.value;
        });

        if (!address) {
            return;
        }

        const gasMeter: GasMeter = {
            name: this.form.get('name')?.value as string,
            uid: localStorage.getItem('user') as string,
            date: Timestamp.fromDate(new Date()),
            address: address[0],
            currentPosition: 0,
            lastPosition: 0
        }

        this.meterService.create(gasMeter).then(() => {
            this.snackBar.openSnackbar('Meter Created!');
        }).catch(err =>{
            this.snackBar.openSnackbar('Failed to create Meter!', [
                'error'
            ]);
            console.error(err);
        })
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
