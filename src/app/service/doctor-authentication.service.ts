import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthenticationService {

  constructor() { }


  authenticate(username:string,password:string){

    if(username=="bharat@gmail.com" && password=="Bharat@123"){
      sessionStorage.setItem("username",username);
      sessionStorage.setItem("password", password);
      return true;
    }else{
      alert("Wrong Credentials !!!");
      return false;
    }
  }

  isDoctorLoggedIn(){
    let user = sessionStorage.getItem('username');
    console.log("Doctor is Logged In ....");
    return !(user==null);
  }

  docLogout(){
    console.log("Doctor is Logged Out ....");
    sessionStorage.removeItem('username');
  }

}
