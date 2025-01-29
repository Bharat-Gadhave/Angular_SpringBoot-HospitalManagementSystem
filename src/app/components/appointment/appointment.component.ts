import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../service/appointment.service';
import { Appointment } from '../../entity/appointment';
import { AdminAuthenticationService } from '../../service/admin-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: false,
  
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit {

  appointments:Appointment[]=[];
  constructor(private router:Router,private appointmetService:AppointmentService,private adminAuthService:AdminAuthenticationService){}

  ngOnInit(){
    this.getApointments();
  }


  getApointments(){
    this.appointmetService.getAllAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }


  delete(id:number){

    this.appointmetService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getApointments();
    })
  }
  
  logout(){
    this.adminAuthService.adminLogout();
    this.router.navigate(['/home']);
  }
}
