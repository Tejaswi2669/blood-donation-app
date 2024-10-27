import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/Users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials, { responseType: 'text' });
  }
  


  findByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`, { responseType: 'text' });
  }

  getAllDonors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/donors`, { responseType: 'text' });
  }
}
