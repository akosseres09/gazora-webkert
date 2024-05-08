import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGasRoutingModule } from './main-gas-routing.module';
import { MainComponent } from './main/main.component';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription, MatExpansionPanelHeader,
    MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import { MeterListComponent } from './main/meter-list/meter-list.component';
import { AddressListComponent } from './main/address-list/address-list.component';
import {TimestampPipe} from "../../shared/pipe/timestamp.pipe";

@NgModule({
    declarations: [
        MainComponent,
        MeterListComponent,
        AddressListComponent,
        TimestampPipe
    ],
    exports: [
        MainComponent,
        TimestampPipe
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
    ]
})
export class MainGasModule { }
