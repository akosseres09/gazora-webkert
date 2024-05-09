import {Component, OnDestroy, OnInit} from '@angular/core';
import {Address} from "../../../shared/models/Address";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingService} from "../../../shared/services/billing/billing.service";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {AddressService} from "../../../shared/services/address/address.service";
import {Location} from "@angular/common";
import {BillingInfo} from "../../../shared/models/BillingInfo";
import {Timestamp} from "firebase/firestore";

@Component({
  selector: 'app-add-billing-info',
  templateUrl: './add-billing-info.component.html',
  styleUrl: './add-billing-info.component.css'
})
export class AddBillingInfoComponent implements OnInit, OnDestroy {
    addresses?: Array<Address>;
    sub?: Subscription;
    uid: string = localStorage.getItem('user') as string;
    isBillingSameAsAddress: boolean = false;
    form = new FormGroup({
        address: new FormControl('', [
            Validators.required
        ])
    });

    addressForm = new FormGroup({
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

    constructor(private billingService: BillingService, private adService: AddressService,
                private snackBar: SnackbarService, private location: Location) {}

    ngOnInit() {
        const uid: string = localStorage.getItem('user') as string;
        this.sub = this.adService.findAllToUid(uid).subscribe(addresses =>{
            this.addresses = addresses;
        });
    }

    submit() {
        if (!this.addressForm.valid) {
            return;
        }
        const address: Address = {
            uid: localStorage.getItem('user') as string,
            date: Timestamp.fromDate(new Date()),
            country: this.addressForm.get('country')?.value as string,
            state: this.addressForm.get('state')?.value as string,
            city: this.addressForm.get('city')?.value as string,
            street: this.addressForm.get('street')?.value as string,
            houseNumber: this.addressForm.get('houseNumber')?.value as string,
            floor: this.addressForm.get('floor')?.value as string,
            doorNumber: this.addressForm.get('doorNumber')?.value as string
        };

        const billing: BillingInfo = {
            address: address,
            uid: this.uid,
            date: Timestamp.fromDate(new Date())
        };

        this.billingService.create(billing).then(() => {
            this.snackBar.openSnackbar('Billing Information Created!');
        }).catch(err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed to Create Billing Information!', [
                'error'
            ])
        })
    }

    submitSame() {
        if (!this.form.valid) {
            return;
        }

        const adValue = this.form.get('address')?.value as string;
        const address = this.addresses?.filter(address => {
            return address.id === adValue
        });

        if (!address) {
            return;
        }

        const billing: BillingInfo = {
            uid: this.uid,
            address: address[0],
            date: Timestamp.fromDate(new Date())
        }

        this.billingService.create(billing).then( () => {
            this.snackBar.openSnackbar('Billing Information Created!');
        }).catch( err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed to Create Billing Information!', [
                'error'
            ])
        });
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
