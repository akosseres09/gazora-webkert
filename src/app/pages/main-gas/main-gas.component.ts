import {Component, OnDestroy, OnInit} from '@angular/core';
import {GasMeter} from "../../shared/models/gasMeter";
import {Address} from "../../shared/models/Address";
import {Subscription} from "rxjs";
import {GasMeterService} from "../../shared/services/gasMeter/gas-meter.service";
import {AddressService} from "../../shared/services/address/address.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {AddSheetComponent} from "../../shared/sheet/add-sheet/add-sheet.component";
import {BillingInfo} from "../../shared/models/BillingInfo";
import {BillingService} from "../../shared/services/billing/billing.service";

@Component({
  selector: 'app-main-gas',
  templateUrl: './main-gas.component.html',
  styleUrl: './main-gas.component.css'
})
export class MainGasComponent implements OnInit, OnDestroy {
    expansionHeight = '80px';
    meters?: Array<GasMeter>;
    addresses?: Array<Address>;
    billings?: Array<BillingInfo>;
    meterSub?: Subscription;
    adSub?: Subscription;
    billingSub?: Subscription;
    constructor(private meterService: GasMeterService, private adService: AddressService,
                private bottomSheet: MatBottomSheet, private billingService: BillingService) {}

    ngOnInit() {
        const uid = localStorage.getItem('user') as string;
        this.meterSub = this.meterService.findAllToUser(uid).subscribe(meters => {
            this.meters = meters;
        });
        this.adSub = this.adService.findAllToUid(uid).subscribe(addresses => {
            this.addresses = addresses;
        });
        this.billingSub = this.billingService.getAllToUser(uid).subscribe(billings => {
            this.billings = billings;
        })
    }

    openBottomSheet() {
        this.bottomSheet.open(AddSheetComponent);
    }

    ngOnDestroy() {
        this.meterSub?.unsubscribe();
        this.adSub?.unsubscribe();
        this.billingSub?.unsubscribe();
    }
}
