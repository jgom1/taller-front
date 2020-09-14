import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUserById(id: number) {
    return this.http.get(`${this.URL}users/${id}`);
  }

  getUserByEmail(email: string) {
    return this.http.get(`${this.URL}users?userEmail=${email}`);
  }

  addNewUser(user: any) {
    return this.http.post(`${this.URL}users`, user);
  }

  getUserPurchases(userId: number) {
    return this.http.get(`${this.URL}purchases?userId=${userId}`);
  }
}
