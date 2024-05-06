import {Component, OnInit} from '@angular/core';
import {AddSheetComponent} from "../../shared/sheet/add-sheet/add-sheet.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-main-gas',
  templateUrl: './main-gas.component.html',
  styleUrl: './main-gas.component.css'
})
export class MainGasComponent implements OnInit{
    loading: boolean = false;

    ngOnInit() {
        this.loading = true;
    }

    constructor(private bottomSheet: MatBottomSheet) {
    }

    openBottomSheet() {
        this.bottomSheet.open(AddSheetComponent);
    }

}
