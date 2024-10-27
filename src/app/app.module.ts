import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DonorDashboardComponent } from './components/donor-dashboard/donor-dashboard.component';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  // Add your routes here, e.g., { path: 'register', component: RegisterComponent }
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donor-dashboard', component: DonorDashboardComponent },
  { path: 'hospital-dashboard', component: HospitalDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HospitalDashboardComponent,
    DonorDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }