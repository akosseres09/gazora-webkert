import {Component, OnDestroy, OnInit} from '@angular/core';
import {GasMeterService} from "../../../shared/services/gasMeter/gas-meter.service";
import {GasMeter} from "../../../shared/models/gasMeter";
import {Subscription} from "rxjs";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {AddressService} from "../../../shared/services/address/address.service";
import {Address} from "../../../shared/models/Address";
import {DialogService} from "../../../shared/services/dialog/dialog.service";
import {MeterDialogComponent} from "../../../shared/dialog/meter-dialog/meter-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {
    meters?: Array<GasMeter>;
    addresses?: Array<Address>;
    meterSub?: Subscription;
    adSub?: Subscription;
    constructor(private meterService: GasMeterService, private adService: AddressService,
                private snackBar: SnackbarService, private dialog: DialogService) {}

    ngOnInit() {
        const uid = localStorage.getItem('user') as string;
        this.meterSub = this.meterService.findAllToUser(uid).subscribe(meters => {
            this.meters = meters;
        });
        this.adSub = this.adService.findAllToUid(uid).subscribe(addresses => {
            this.addresses = addresses;
        });
    }

    openDialog(id: string) {
        const meter = this.meters?.filter(meter => meter.id === id);
        if (!meter) {
            return;
        }
        this.dialog.openDialog({
            meter: meter[0],
            dialog: this.dialog,
            addresses: this.addresses,
            component: this
        }, MeterDialogComponent)
    }

    delete(id: string) {
        this.meterService.delete(id).then(() => {
            this.snackBar.openSnackbar('Meter Deleted!');
        }).catch(err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed To Delete Meter!', [
                'error'
            ]);
        })
    }

    edit(meter: GasMeter) {
        this.dialog.closeAll();
        this.meterService.update(meter).then(() => {
            this.snackBar.openSnackbar('Updated Meter!');
        }).catch(err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed to Update Meter!', [
                'error'
            ]);
        });
    }

    ngOnDestroy() {
        this.meterSub?.unsubscribe();
        this.adSub?.unsubscribe();
    }

}
