import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state.interface';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { appActions } from '../../store/app.actions';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  public user: User;
  public shippingType: string = 'Correos';
  public totalPaymentBeforeTaxes: number;
  public selectedCreditCard: number = 0;

  constructor(
    private store: Store<appState>,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeCart();
    this.subscribeUser();
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

  private getTotalProductCost() {
    let totalCost = 0;
    for (const key in this.cartProducts) {
      totalCost += this.cartProducts[key].productPrice;
    }
    return totalCost;
  }

  private subscribeUser() {
    this.subscription.add(
      this.user$.subscribe((data: User) => {
        this.user = data;
      })
    );
  }

  private getFormatedDate() {
    const currentDate = new Date();
    return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  }

  public getTotalPaymentBeforeTaxes() {
    this.totalPaymentBeforeTaxes = this.getTotalProductCost() + ((this.shippingType === 'Correos') ? 6.90 : 4.90);
  }

  public removeCartItem(indexItem: number) {
    this.cartProducts = [...this.cartProducts].filter((value, index) => index !== indexItem);
    this.store.dispatch(appActions.setCart({ cart: this.cartProducts }));
  }

  public setSelectedCreditCard(index) {
    this.selectedCreditCard = index;
  }

  public endAndPay() {
    const purchase = {
      'userId': this.user.id,
      'purchaseDate': this.getFormatedDate(),
      'purchaseProducts': this.cartProducts,
      'purchaseShipping': {
        'purchaseShippingName': this.shippingType,
        'purchaseShippingPayment': (this.shippingType === 'Correos') ? 6.90 : 4.90
      },
      'purchasePayment': Math.round((this.totalPaymentBeforeTaxes * 1.21) * 100) / 100,
      'purchaseState': 'Procesado'
    };
    this.subscription.add(
      this.userService.addNewPurchase(purchase).subscribe((data) => { console.log(data) })
    );
  }

  public cleanCartAndNavigate() {
    this.store.dispatch(appActions.setCart({ cart: [] }));
    this.router.navigate(['/purchases']);
  }
}
