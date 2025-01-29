import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DocDashbordComponent } from './components/doc-dashbord/doc-dashbord.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomePageComponent,
    DocDashbordComponent,
    CreatePatientComponent,
    MedicineListComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DoctorLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
