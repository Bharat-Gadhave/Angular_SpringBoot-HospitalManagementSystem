import { Component } from '@angular/core';
import { Appointment } from '../../entity/appointment';
import { AppointmentService } from '../../service/appointment.service';
import { Router } from '@angular/router';
import { AdminAuthenticationService } from '../../service/admin-authentication.service';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointment:Appointment = new Appointment();

  constructor(private appointmentService:AppointmentService, private router:Router,private adminAuthService:AdminAuthenticationService){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointmentList();
    })
  }

  onSubmit(){
    this.saveAppointment();
  }

  goToAppointmentList(){
    this.router.navigate(['/appointmentlist'])
  }

  logout(){
    this.adminAuthService.adminLogout();
    this.router.navigate(['/home']);
  }
}
