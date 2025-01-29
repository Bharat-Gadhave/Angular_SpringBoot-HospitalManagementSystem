import { Component } from '@angular/core';
import { Patient } from '../../entity/patient';
import { PatientService } from '../../service/patient.service';
import { Router } from '@angular/router';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-doc-dashbord',
  standalone: false,
  
  templateUrl: './doc-dashbord.component.html',
  styleUrl: './doc-dashbord.component.css'
})
export class DocDashbordComponent {
  patients:Patient[]=[];

  constructor(private patientService:PatientService,private router:Router,private doctorAuthenticationService:DoctorAuthenticationService){}


  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.patientService.gatPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  update(id:number){

    this.router.navigate(['/update-patient',id]);
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.doctorAuthenticationService.docLogout();
    this.router.navigate(['/home']);
  }
}
