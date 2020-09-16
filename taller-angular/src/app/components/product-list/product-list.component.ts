import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public products: any[];

  constructor(private shareService: ShareDataService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProductList() {
    this.subscription.add(
      this.shareService.filteredProducts.subscribe((data: any) => {
        this.products = data;
      })
    );
  }

}
