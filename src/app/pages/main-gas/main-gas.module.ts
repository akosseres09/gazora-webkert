import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGasRoutingModule } from './main-gas-routing.module';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription, MatExpansionPanelHeader,
    MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import { MeterListComponent } from './meter-list/meter-list.component';
import { AddressListComponent } from './address-list/address-list.component';
import {TimestampPipe} from "../../shared/pipe/timestamp.pipe";
import {MatFabButton} from "@angular/material/button";

@NgModule({
    declarations: [
        MeterListComponent,
        AddressListComponent,
        TimestampPipe
    ],
    exports: [
        TimestampPipe,
        MeterListComponent,
        AddressListComponent
    ],
    imports: [
        CommonModule,
        MainGasRoutingModule,
        MatAccordion,
        MatExpansionPanelHeader,
        MatExpansionPanel,
        MatExpansionPanelDescription,
        MatExpansionPanelTitle,
        MatDivider,
        MatIcon,
        MatFabButton,
    ]
})
export class MainGasModule { }
