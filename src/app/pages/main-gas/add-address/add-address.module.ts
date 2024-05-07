import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAddressRoutingModule } from './add-address-routing.module';
import {AddAddressComponent} from "./add-address.component";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";


@NgModule({
  declarations: [
      AddAddressComponent
  ],
  imports: [
    CommonModule,
    AddAddressRoutingModule,
      MatListModule,
      ReactiveFormsModule,
      MatLabel,
      MatFormFieldModule,
      MatInputModule,
      MatButton
  ]
})
export class AddAddressModule { }
