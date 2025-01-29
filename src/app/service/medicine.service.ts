import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../entity/medicineEntity/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private bsaseUrl = "http://localhost:8080/api/medicine";


  getMedicines():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.bsaseUrl}`+'/all');  
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.bsaseUrl}`+"/insert",medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{

    return this.httpClient.get<Medicine>(`${this.bsaseUrl}/byid/${id}`);

  }

  updateMedicine(id:number,medicine:Medicine):Observable<Medicine>{
    return this.httpClient.put<Medicine>(`${this.bsaseUrl}/update/${id}`,medicine);
  }

  deleteMedicineById(id:number):Observable<object>{
    return this.httpClient.delete(`${this.bsaseUrl}/delete/${id}`);
  }
}
