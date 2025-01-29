import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthenticationService } from './admin-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private adminAuthService:AdminAuthenticationService,private router:Router) { }

  canActivate(){
      
    if(this.adminAuthService.isAdminLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['admin-login']);
      return false;
    }
  }
}
