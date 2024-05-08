import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
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
