import { Component } from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-add-sheet',
  templateUrl: './add-sheet.component.html',
  styleUrl: './add-sheet.component.css'
})
export class AddSheetComponent {

    constructor(private bottomSheet: MatBottomSheet) {
    }
    closeSheet() {
        this.bottomSheet.dismiss();
    }
}
