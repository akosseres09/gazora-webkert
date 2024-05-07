import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGasRoutingModule } from './main-gas-routing.module';
import { MainComponent } from './main/main.component';
import {MatListModule} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import { AddMeterComponent } from './add-meter/add-meter.component';
import { AddAddressComponent } from './add-address/add-address.component';

@NgModule({
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MainGasRoutingModule,
        MatListModule,
        ReactiveFormsModule,
        MatLabel,
        MatFormFieldModule,
        MatInputModule,
        MatButton
    ]
})
export class MainGasModule { }
