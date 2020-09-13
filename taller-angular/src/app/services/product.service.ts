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

  getProductByFeatures(features: string) {
    this.http.get(`${this.URL}/products?${features}`).subscribe((productsByFeatures: any) => { return productsByFeatures });
  }

  getPromotionalProducts() {
    return this.http.get(`${this.URL}products?productPromotion=true`);
  }

  updateProduct(product: any) {
    this.http.put(`${this.URL}/products/${product.id}`, product).subscribe((updatedProduct: any) => { return updatedProduct });
  }
}
