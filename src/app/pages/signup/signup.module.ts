import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import {SignupComponent} from "./signup.component";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
      SignupComponent
  ],
    imports: [
        CommonModule,
        SignupRoutingModule,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatProgressSpinner,
        ReactiveFormsModule
    ]
})
export class SignupModule { }
