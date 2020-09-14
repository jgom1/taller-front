import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state.interface';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { appActions } from '../../store/app.actions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {

  private cart$: Observable<Product[]> = this.store.select((state: any) => state.app.cart);
  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private subscription: Subscription = new Subscription();
  public cartProducts: Product[];
  public shippingType: string = 'Correos';
  public shippingCost: number = 6.90;
  public totalPaymentBeforeTaxes: number;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.subscribeCart();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeCart() {
    this.subscription.add(
      this.cart$.subscribe((data: Product[]) => {
        this.cartProducts = data;
        this.getTotalPaymentBeforeTaxes();
      })
    );
  }

  public removeCartItem(indexItem: number) {
    this.cartProducts = [...this.cartProducts].filter((value, index) => index !== indexItem);
    this.store.dispatch(appActions.setCart({ cart: this.cartProducts }));
  }

  private getTotalProductCost() {
    let totalCost = 0;
    for (const key in this.cartProducts) {
      totalCost += this.cartProducts[key].productPrice;
    }
    return totalCost;
  }

  private getTotalPaymentBeforeTaxes() {
    this.totalPaymentBeforeTaxes = this.getTotalProductCost() + this.shippingCost;
  }

}
