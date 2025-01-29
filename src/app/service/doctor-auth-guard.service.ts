import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DoctorAuthenticationService } from './doctor-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuardService implements CanActivate {

  constructor(private doctorAuthenticationService:DoctorAuthenticationService, private router:Router){}

  canActivate() {
    if(this.doctorAuthenticationService.isDoctorLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/doc-login']);
      return false;
    }
  }

 
}
