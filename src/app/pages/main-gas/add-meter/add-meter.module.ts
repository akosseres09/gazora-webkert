import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeterRoutingModule } from './add-meter-routing.module';
import {AddMeterComponent} from "./add-meter.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";


@NgModule({
  declarations: [
      AddMeterComponent
  ],
    imports: [
        CommonModule,
        AddMeterRoutingModule,
        MatFormField,
        ReactiveFormsModule,
        FormsModule,
        MatInput,
        MatSelect,
        MatOption,
        MatLabel,
        MatButton
    ]
})
export class AddMeterModule { }
