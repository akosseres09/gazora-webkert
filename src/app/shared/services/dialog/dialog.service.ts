import { Injectable } from '@angular/core';
import {DialogComponent} from "../../dialog/user-dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) { }

    openDialog(data: {}, component: any = DialogComponent) {
        return this.dialog.open(component, {
            width: '30%',
            data: data
        });
    }

    closeAll() {
        return this.dialog.closeAll();
    }
}
