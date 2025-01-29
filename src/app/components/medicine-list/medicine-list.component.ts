import { Component } from '@angular/core';
import { MedicineService } from '../../service/medicine.service';
import { Medicine } from '../../entity/medicineEntity/medicine';
import { Router } from '@angular/router';
import { DoctorAuthenticationService } from '../../service/doctor-authentication.service';

@Component({
  selector: 'app-medicine-list',
  standalone: false,
  
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent {

  id:number=0;
  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router:Router,private docAuthService:DoctorAuthenticationService ){}


  ngOnInit():void{
    this.getAllMedicines();
  }

  getAllMedicines(){
    this.medicineService.getMedicines().subscribe(data=>{
      this.medicines=data;
    })
  }

  update(id:number){
    this.router.navigate(['/update-medicine',id]);
  }

  delete(id:number){

    this.medicineService.deleteMedicineById(id).subscribe(data=>{
      console.log(data);
      this.getAllMedicines();
    })
  }

  logout(){
    this.docAuthService.docLogout();
    this.router.navigate(['/home']);
  }
}
