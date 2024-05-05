import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authActivateGuard: CanActivateFn = (route, state) => {
    const user = localStorage.getItem('user');
    const router = inject(Router);
    if (user !== null) {
        if (state.url === '/' || state.url === '/signup') {
            router.navigateByUrl('/gas');
            return false;
        }
        return true;
    } else {
        console.log('aaaa');
        if (state.url === '/' || state.url === '/signup') {
            return true;
        }
        router.navigateByUrl('/');
        return false;
    }
};
