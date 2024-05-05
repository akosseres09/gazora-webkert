import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authActivateGuard} from "./shared/guards/auth-activate.guard";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
        canActivate: [authActivateGuard]
    },
    {
        path: 'signup',
        loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule),
        canActivate: [authActivateGuard]
    },
    {
        path: 'gas',
        loadChildren: () => import('./pages/main-gas/main-gas.module').then(m => m.MainGasModule),
        canActivate: [authActivateGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
