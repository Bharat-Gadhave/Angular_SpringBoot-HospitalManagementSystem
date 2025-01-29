import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {

  constructor() { }


  authenticate(adminUsername:string,adminPassword:string){

    if(adminUsername=="sharad" && adminPassword=="Sharad@123"){
      sessionStorage.setItem('adminUsername',adminUsername);
      sessionStorage.setItem('adminPassword', adminPassword);
      return true;
    }else{
      return false;
    }
  }

  isAdminLoggedIn(){
    console.log("Admin is Logged In ....");
    let adminUser = sessionStorage.getItem('adminUsername');
    return !(adminUser==null);
  }

  adminLogout(){
    console.log("Admin logged out....!");
    sessionStorage.removeItem('adminUsername');
  }
}
