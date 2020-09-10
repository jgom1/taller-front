import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUserById(id: number) {
    this.http.get(`${this.URL}/users/${id}`).subscribe((user: any) => { return user });
  }

  getUserByEmail(email: string) {
    this.http.get(`${this.URL}/users?userEmail=${email}`).subscribe((user: any) => { return user });
  }

  addNewUser(user: any) {
    this.http.post(`${this.URL}/users`, user).subscribe((newUser: any) => { return newUser });
  }
}
