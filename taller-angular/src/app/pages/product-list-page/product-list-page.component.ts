import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareDataService } from '../../services/share-data.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  public products: Product[];

  constructor(private shareService: ShareDataService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProductList() {
    this.subscription.add(
      this.shareService.filteredProducts.subscribe((data: Product[]) => {
        this.products = data;
      })
    );
  }

}
