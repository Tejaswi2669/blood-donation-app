import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DonorDashboardComponent } from './components/donor-dashboard/donor-dashboard.component';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donor-dashboard', component: DonorDashboardComponent },
  { path: 'hospital-dashboard', component: HospitalDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }