import {Component, OnDestroy, OnInit} from '@angular/core';
import {GasMeterService} from "../../../shared/services/gasMeter/gas-meter.service";
import {GasMeter} from "../../../shared/models/gasMeter";
import {Subscription} from "rxjs";
import {AddressService} from "../../../shared/services/address/address.service";
import {Address} from "../../../shared/models/Address";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {
    expansionHeight = '80px';
    meters?: Array<GasMeter>;
    addresses?: Array<Address>;
    meterSub?: Subscription;
    adSub?: Subscription;
    constructor(private meterService: GasMeterService, private adService: AddressService) {}

    ngOnInit() {
        const uid = localStorage.getItem('user') as string;
        this.meterSub = this.meterService.findAllToUser(uid).subscribe(meters => {
            this.meters = meters;
        });
        this.adSub = this.adService.findAllToUid(uid).subscribe(addresses => {
            this.addresses = addresses;
        });
    }

    ngOnDestroy() {
        this.meterSub?.unsubscribe();
        this.adSub?.unsubscribe();
    }

}
