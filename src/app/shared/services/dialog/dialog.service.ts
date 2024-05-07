import { Injectable } from '@angular/core';
import {DialogComponent} from "../../dialog/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

    constructor(private dialog: MatDialog) { }

    openDialog(data: {}) {
        return this.dialog.open(DialogComponent, {
            width: 'fill-content',
            data: data
        });
    }

    closeAll() {
        return this.dialog.closeAll();
    }
}
