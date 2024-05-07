import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGasRoutingModule } from './main-gas-routing.module';
import { MainComponent } from './main/main.component';

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
    ]
})
export class MainGasModule { }
