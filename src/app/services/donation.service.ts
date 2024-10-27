import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from '../models/Donation';


@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private baseUrl = 'http://localhost:8080/api/donations';

  constructor(private http: HttpClient) { }

  getDonationsByDonorId(donorId: number): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.baseUrl}/donor/${donorId}`);
  }

  createDonation(donation: Donation): Observable<any> {
    return this.http.post(`${this.baseUrl}`, donation);
  }
}
