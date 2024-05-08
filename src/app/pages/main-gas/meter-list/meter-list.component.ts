import {Component, Input} from '@angular/core';
import {GasMeter} from "../../../shared/models/gasMeter";
import {GasMeterService} from "../../../shared/services/gasMeter/gas-meter.service";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../shared/services/dialog/dialog.service";
import {MeterDialogComponent} from "../../../shared/dialog/meter-dialog/meter-dialog.component";
import {Address} from "../../../shared/models/Address";

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrl: './meter-list.component.css'
})
export class MeterListComponent {
    @Input() meters?: Array<GasMeter>;
    @Input() addresses?: Array<Address>;
    @Input() expansionHeight?: string;

    constructor(private meterService: GasMeterService, private snackBar: SnackbarService, private dialog: DialogService) {}

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
}
