import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../entity/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/api/patient";
  
  gatPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`+'/all');
  }

  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}`+'/delete/'+`${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}/create`,patient);
  }

  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}/byid/${id}`);
  }

  updatePatientById(id:number,patient:Patient):Observable<object>{
    return this.httpClient.put<Patient>(`${this.baseUrl}/update/${id}`,patient);
  }
}
