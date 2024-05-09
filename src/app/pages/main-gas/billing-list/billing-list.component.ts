import {Component, Input} from '@angular/core';
import {BillingInfo} from "../../../shared/models/BillingInfo";
import {BillingService} from "../../../shared/services/billing/billing.service";
import {SnackbarService} from "../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../shared/services/dialog/dialog.service";
import {Address} from "../../../shared/models/Address";
import {BillingDialogComponent} from "../../../shared/dialog/billing-dialog/billing-dialog.component";

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
            billing: billing[0],
            dialog: this.dialog,
            addresses: this.addresses,
            component: this
        }, BillingDialogComponent)
    }

    edit(billing: BillingInfo) {
        this.billingService.update(billing).then(() => {
            this.snackBar.openSnackbar('Billing Info updated!');
        }).catch(err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed to Update Billing Info!', [
                'error'
            ]);
        });
    }

    delete(id: string) {
        this.billingService.delete(id).then(() => {
            this.snackBar.openSnackbar('Billing Info Deleted!');
        }).catch(err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed to Delete Billing Info!', [
                'error'
            ]);
        });
    }
}
