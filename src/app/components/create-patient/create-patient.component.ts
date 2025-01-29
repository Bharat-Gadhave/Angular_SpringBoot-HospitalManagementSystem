import { Component } from '@angular/core';
import { Patient } from '../../entity/patient';
import { PatientService } from '../../service/patient.service';
import { Router } from '@angular/router';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-create-patient',
  standalone: false,
  
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

  patient:Patient = new Patient();

  constructor(private patientServise:PatientService,private router:Router,private docAuthService:DoctorAuthenticationService){

  }

  savePatient(){
    if(this.patient.pname && this.patient.urgency && this.patient.pcity && this.patient.pnumber){
      this.patientServise.createPatient(this.patient).subscribe(data=>{
        console.log(data);
        this.goToPatientList();
      })
    }else{
      console.log("Please enter a values in Table");
    }
  }


  goToPatientList(){
    this.router.navigate(['/doctor'])
  }

  onSubmit(){
    this.savePatient();
  }

  logout(){

    this.docAuthService.docLogout();
    this.router.navigate(['/home']);
  }
}
