import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public products: any[];

  constructor(
    private productService: ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProductList() {
    this.subscription.add(
      this.productService.getPromotionalProducts().subscribe((data: any) => {
        this.products = data;
      })
    );
  }

  public navigateTo(productId:number){
    this.router.navigate(['/product',productId]);
  }

}
