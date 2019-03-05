import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor() {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // TODO (matt): implement isAuthenticated()
        return true;
    }
}
