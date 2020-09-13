import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public products: any[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProductList() {
    this.subscription.add(
      this.productService.getProducts().subscribe((data: any) => {
        this.products = data;
      })
    );
  }

}
