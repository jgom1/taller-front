import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.URL}products`);
  }

  getProductById(id: number) {
    return this.http.get(`${this.URL}products/${id}`);
  }

  getPromotionalProducts() {
    return this.http.get(`${this.URL}products?productPromotion=true`);
  }

  getBrands() {
    return this.http.get(`${this.URL}brands`);
  }
}
