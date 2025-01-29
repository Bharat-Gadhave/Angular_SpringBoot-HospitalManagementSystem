import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../entity/patient';
import { AdminAuthenticationService } from '../service/admin-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  standalone: false,

  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private router:Router,private patientService: PatientService,private adminAuthenticationService:AdminAuthenticationService) { }

  ngOnInit(): void {
    console.log(this.getPatients());
    this.getPatients();
  }

  getPatients() {
    this.patientService.gatPatientList().subscribe((data: Patient[]) => {
      this.patients = data;
    })
  }


  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  adminLogout(){
    this.adminAuthenticationService.adminLogout();
    this.router.navigate(['/home']);
  }
}