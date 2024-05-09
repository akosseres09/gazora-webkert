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
import { MatButton, MatFabButton } from "@angular/material/button";
import { AddBillingInfoComponent } from './add-billing-info/add-billing-info.component';
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";
import { MatInput } from "@angular/material/input";
import { BillingListComponent } from './billing-list/billing-list.component';

@NgModule({
    declarations: [
        MeterListComponent,
        AddressListComponent,
        TimestampPipe,
        AddBillingInfoComponent,
        BillingListComponent
    ],
    exports: [
        TimestampPipe,
        MeterListComponent,
        AddressListComponent,
        BillingListComponent,
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
        MatSlideToggle,
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatSelect,
        MatOption,
        MatLabel,
        MatButton,
        MatInput
    ]
})
export class MainGasModule { }
