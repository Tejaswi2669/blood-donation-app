import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/Users';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.css']
})
export class HospitalDashboardComponent implements OnInit {
requestDonation(_t13: User) {
throw new Error('Method not implemented.');
}
  donors: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllDonors().subscribe(
      data => {
        this.donors = data;
      },
      error => {
        console.error('Error fetching donors', error);
      }
    );
  }
}