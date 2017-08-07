import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { Auth } from './auth.service'

@Injectable()
export class AuthProvider implements CanActivate{

    constructor(private authService: Auth, private router: Router) {}

    canActivate(actRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        return this.authService.checkAuthorization('Manager',actRoute.data["PermissionsLevel"])//user role and component permission level
        .then(
            (allowed:boolean)=> 
            {
                return allowed;
            }
        )
        .catch(()=>{
            return false;
        });
    }
}