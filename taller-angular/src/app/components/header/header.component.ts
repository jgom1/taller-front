import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { appActions } from '../../store/app.actions';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { appState } from '../../store/app.state.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private logged$: Observable<boolean> = this.store.select((state: any) => state.app.userLogged);
  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private cart$: Observable<Product[]> = this.store.select((state: any) => state.app.cart);
  private subscription: Subscription = new Subscription();
  public cartItems: number;
  public logged: boolean;
  public userName: string = '';

  constructor(
    private store: Store<appState>,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeLogged();
    this.subscribeCart();
    this.subscribeUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeCart() {
    this.subscription.add(
      this.cart$.subscribe((data: Product[]) => {
        this.cartItems = data.length;
      })
    );
  }

  private subscribeUser() {
    this.subscription.add(
      this.user$.subscribe((data: User) => {
        if (data) {
          this.userName = data.userName;
        }
      })
    );
  }

  private subscribeLogged(): void {
    this.subscription.add(
      this.logged$.subscribe((data: any) => {
        this.logged = data;
      })
    );
  }

  public logout() {
    this.store.dispatch(appActions.logout());
    this.store.dispatch(appActions.setCart({ cart: [] }));
    this.store.dispatch(appActions.setUser({ user: {} }));
    this.router.navigate(['/products']);
  }

}
