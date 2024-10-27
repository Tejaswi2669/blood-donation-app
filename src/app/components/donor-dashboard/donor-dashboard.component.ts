import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { UserService } from '../../services/user.service';
import { Donation } from 'src/app/models/Donation';
import { User } from 'src/app/models/Users';


@Component({
  selector: 'app-donor-dashboard',
  templateUrl: './donor-dashboard.component.html',
  styleUrls: ['./donor-dashboard.component.css']
})
export class DonorDashboardComponent implements OnInit {
  donations: Donation[] = [];
  currentUser: User | undefined;

  constructor(private donationService: DonationService, private userService: UserService) { }

  ngOnInit(): void {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.userService.findByEmail(email).subscribe(user => {
        this.currentUser = user;
        this.donationService.getDonationsByDonorId(user.id!).subscribe(
          data => {
            this.donations = data;
          },
          error => {
            console.error('Error fetching donations', error);
          }
        );
      });
    } else {
      console.error('No email found in local storage');
    }
  }
}