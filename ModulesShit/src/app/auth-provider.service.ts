import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { Auth } from './auth.service'

@Injectable()
export class AuthProvider implements CanActivate{

    constructor(private authService: Auth, private router: Router) {}

    canActivate(actRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
     //   let toAllow:boolean;
       return this.authService.checkAuthorization('Manager',actRoute.data["PermissionsLevel"])
        .then(
            (allowed:boolean)=> 
            {
   //             toAllow=allowed;
                if(!allowed)
                    this.router.navigate(['/notAllowedBro']);
                return allowed
            }
        )
        .catch(()=>{return false;});

       // console.log('came till here')
        //return toAllow;
    }
}