import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGasComponent } from "./main-gas.component";


const routes: Routes = [
    {
        path: '',
        component: MainGasComponent
    },
    {
        path: 'add-billing',
        loadChildren: () => import('./add-billing-info/add-billing-info.module').then(m => m.AddBillingInfoModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'add-meter',
        loadChildren: () => import('./add-meter/add-meter.module').then(m => m.AddMeterModule)
    },
    {
        path: 'add-address',
        loadChildren: () => import('./add-address/add-address.module').then(m => m.AddAddressModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainGasRoutingModule { }
