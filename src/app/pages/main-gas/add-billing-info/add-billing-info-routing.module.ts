import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddBillingInfoComponent} from "./add-billing-info.component";

const routes: Routes = [
    {
        path: '',
        component: AddBillingInfoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBillingInfoRoutingModule { }
