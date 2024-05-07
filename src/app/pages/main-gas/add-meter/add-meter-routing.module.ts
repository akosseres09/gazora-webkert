import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddMeterComponent} from "./add-meter.component";

const routes: Routes = [
    {
        path: '',
        component: AddMeterComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMeterRoutingModule { }
