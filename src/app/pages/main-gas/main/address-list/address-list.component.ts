import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Address} from "../../../../shared/models/Address";
import {AddressService} from "../../../../shared/services/address/address.service";
import {SnackbarService} from "../../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../../shared/services/dialog/dialog.service";
import {AddressDialogComponent} from "../../../../shared/dialog/address-dialog/address-dialog.component";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {
    @Input() addresses?: Array<Address>;
    @Input() expansionHeight?: string;

    constructor(private adService: AddressService, private snackBar: SnackbarService, private dialog: DialogService) {}

    delete(id: string) {

    }

    edit(id: string) {

    }

    openDialog(id: string) {
        const address = this.addresses?.filter(address => address.id === id);
        if (!address) {
            return;
        }
        this.dialog.openDialog({
            address: address[0],
            dialog: this.dialog,
            addresses: this.addresses,
            component: this
        }, AddressDialogComponent);
    }

}
