import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state.interface';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { appActions } from '../../store/app.actions';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit, OnDestroy {

  private cart$: Observable<Product[]> = this.store.select((state: any) => state.app.cart);
  private subscription: Subscription = new Subscription();
  public products: Product[];

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    console.log(this.products);
    this.getCart();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getCart() {
    this.subscription.add(
      this.cart$.subscribe((data: any) => {
        this.products = data;
      })
    );
  }

  public removeCartItem(indexItem: number) {
    this.products = [...this.products].filter((value, index) => index !== indexItem);
    this.store.dispatch(appActions.setCart({ cart: this.products }));
  }

}
