import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainGasComponent} from "./main-gas.component";

const routes: Routes = [
    {
        path: '',
        component: MainGasComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainGasRoutingModule { }
