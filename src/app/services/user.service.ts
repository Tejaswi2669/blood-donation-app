import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/Users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllDonors():Observable<User> {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}