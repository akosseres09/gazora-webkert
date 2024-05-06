import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGasRoutingModule } from './main-gas-routing.module';
import { MainComponent } from './main/main.component';
import {MatListModule} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

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
        MatIcon,
    ]
})
export class MainGasModule { }
