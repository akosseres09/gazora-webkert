import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import {MatAnchor} from "@angular/material/button";


@NgModule({
  declarations: [
    NotFoundComponent
  ],
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        MatAnchor
    ]
})
export class NotFoundModule { }
