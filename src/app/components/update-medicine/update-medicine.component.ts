import { Component } from '@angular/core';
import { Medicine } from '../../entity/medicineEntity/medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../../service/medicine.service';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {


  id:number=0;

  medicine:Medicine = new Medicine();

  constructor(private router:Router, private route:ActivatedRoute, private medicineService:MedicineService){}



  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine = data;
    })
  }

  onSubmit(){

    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicineList();
    })
  }

  goToMedicineList(){
    this.router.navigate(['/view-medicine']); 
  }
}
