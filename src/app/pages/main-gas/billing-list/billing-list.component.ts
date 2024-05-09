import {Component, Input} from '@angular/core';
import {BillingInfo} from "../../../shared/models/BillingInfo";
import {BillingService} from "../../../shared/services/billing/billing.service";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../shared/services/dialog/dialog.service";
import {MeterDialogComponent} from "../../../shared/dialog/meter-dialog/meter-dialog.component";
import {Address} from "../../../shared/models/Address";

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrl: './billing-list.component.css'
})
export class BillingListComponent {
    @Input() billings?: Array<BillingInfo>;
    @Input() addresses?: Array<Address>;
    @Input() expansionHeight?: string;

    constructor(private billingService: BillingService, private snackBar: SnackbarService, private dialog: DialogService) {}

    openDialog(id: string) {
        const billing = this.billings?.filter(billing => billing.id === id);
        if (!billing) {
            return;
        }
        this.dialog.openDialog({
            meter: billing[0],
            dialog: this.dialog,
            addresses: this.billings,
            component: this
        }, MeterDialogComponent)
    }

    delete(id: string) {

    }
}
