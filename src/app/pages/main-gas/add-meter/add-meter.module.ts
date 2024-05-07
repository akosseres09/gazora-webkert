import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeterRoutingModule } from './add-meter-routing.module';
import {AddMeterComponent} from "./add-meter.component";


@NgModule({
  declarations: [
      AddMeterComponent
  ],
  imports: [
    CommonModule,
    AddMeterRoutingModule
  ]
})
export class AddMeterModule { }
