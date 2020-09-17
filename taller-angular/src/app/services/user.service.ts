import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../models/purchase.model';
import { User } from '../models/user.model';

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

  addNewUser(newUser: any) {
    // return this.http.post(`${this.URL}users`, JSON.stringify(newUser), { headers });
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    };
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, JSON.stringify(newUser), { headers });
  }

  getUserPurchases(userId: number) {
    return this.http.get(`${this.URL}purchases?userId=${userId}`);
  }

  getUserFavourites(userId: number) {
    return this.http.get(`${this.URL}favourites?userId=${userId}`);
  }

  updateFavourites(favourites: any) {
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    };
    // return this.http.put(`${this.URL}favourites/${favourites.id}`, JSON.stringify(favourites), { headers });
    return this.http.put(`https://jsonplaceholder.typicode.com/posts`, JSON.stringify(favourites), { headers });
  }

  updateUser(user: User) {
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    };
    // return this.http.put(`${this.URL}users/${user.id}`, JSON.stringify(user), { headers });
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${user.id}`, JSON.stringify(user), { headers });
  }

  addNewPurchase(newPurchase: Purchase) {
    const headers = {
      "Content-type": "application/json; charset=UTF-8"
    };
    // return this.http.post(`${this.URL}purchases`, newPurchase);
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, JSON.stringify(newPurchase), { headers });
  }

  removeUser(userId: number) {
    // return this.http.delete(`${this.URL}users/${userId}`);
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/1`);
  }
}
