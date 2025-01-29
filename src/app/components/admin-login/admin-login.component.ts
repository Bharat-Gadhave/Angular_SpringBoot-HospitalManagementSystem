import { Component } from '@angular/core';
import { AdminAuthenticationService } from '../../service/admin-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {


  username:string="";
  password:string="";

  inValidLogin = false;

  constructor(private adminLoginService:AdminAuthenticationService,private router:Router){}

  checkLogin(){
    if(this.adminLoginService.authenticate(this.username,this.password)){

      this.router.navigate(['/admin']);
      this.inValidLogin=false;

    }else{
      this.inValidLogin=true;
      alert("Wrong Credentials !!!!");
      this.router.navigate(['/home']);
    }
  }
}
