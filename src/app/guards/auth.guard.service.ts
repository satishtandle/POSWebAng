﻿import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('jwtToken')) {
            return true;
        }

        this.router.navigate(['/vlogon'], {
            queryParams: {returnUrl: state.url}
        });
        return false;
    }
}