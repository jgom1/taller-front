import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public subject = new Subject<any>();
  public editDataDetails: any = [];
  private messageSource = new BehaviorSubject(this.editDataDetails);
  public filteredProducts = this.messageSource.asObservable();

  constructor() { }

  updateProducts(products: Product[]) {
    this.messageSource.next(products)
  }

}
