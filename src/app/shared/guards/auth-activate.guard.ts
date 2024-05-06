import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const  authActivateGuard: CanActivateFn = async (route, state) => {
    const user = localStorage.getItem('user');
    const router = inject(Router);
    if (user === null || user === 'null') {
        return true;
    } else {
        return router.createUrlTree(['/main'])
    }
};
