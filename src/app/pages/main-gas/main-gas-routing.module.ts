import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainGasComponent} from "./main-gas.component";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {ProfileComponent} from "./profile/profile.component";

const redirectUnauthorized = () => redirectUnauthorizedTo('/');

const routes: Routes = [
    {
        path: '',
        component: MainGasComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainGasRoutingModule { }
