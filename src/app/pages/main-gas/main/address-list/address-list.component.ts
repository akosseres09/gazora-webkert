import {Component, Input} from '@angular/core';
import {Address} from "../../../../shared/models/Address";
import {AddressService} from "../../../../shared/services/address/address.service";
import {SnackbarService} from "../../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../../shared/services/dialog/dialog.service";
import {AddressDialogComponent} from "../../../../shared/dialog/address-dialog/address-dialog.component";
import {GasMeter} from "../../../../shared/models/gasMeter";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css'
})
export class AddressListComponent {
    @Input() addresses?: Array<Address>;
    @Input() meters?: Array<GasMeter>;
    @Input() expansionHeight?: string;

    constructor(private adService: AddressService, private snackBar: SnackbarService, private dialog: DialogService) {}

    edit(address: Address) {
        this.dialog.closeAll();
        this.adService.update(address).then(() => {
            this.snackBar.openSnackbar('Address Edited!');
        }).catch(err => {
            console.error(err);
            this.snackBar.openSnackbar('Failed To Edit Address!', [
                'error'
            ]);
        });
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
