import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-doctor-login',
  standalone: false,
  
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent {

  username:string="";
  password:string="";
  
  inValidLogin=false;

  constructor(private router:Router, private docAuth:DoctorAuthenticationService){}

  checkLogin(){

    if(this.docAuth.authenticate(this.username,this.password)){
      this.router.navigate(['/doctor']);
      this.inValidLogin=false;
    }else{
      this.inValidLogin=true;
      alert("Wrong Credentials !!!!");
      this.router.navigate(['/home']);
    }

  }
}
