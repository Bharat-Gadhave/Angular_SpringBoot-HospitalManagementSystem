import { Component } from '@angular/core';
import { Medicine } from '../../entity/medicineEntity/medicine';
import { MedicineService } from '../../service/medicine.service';
import { Router } from '@angular/router';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

  medicine:Medicine = new Medicine();

  constructor(private medicineService:MedicineService, private router:Router,private docAuthService:DoctorAuthenticationService){}

  onSubmit(){

    this.saveMedicine();
  }

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.goToViewMedicine();
    })
  }

  goToViewMedicine(){
    this.router.navigate(['/view-medicine']);
  }

  logout(){

    this.docAuthService.docLogout();
    this.router.navigate(['/home']);
  }
}
