import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { appActions } from '../../store/app.actions';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { appState } from '../../store/app.state.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private user$: Observable<any> = this.store.select((state: any) => state.app.user);
  private cart$: Observable<Product[]> = this.store.select((state: any) => state.app.cart);
  private subscription: Subscription = new Subscription();
  logged: boolean = false;
  userName: string = '';
  cardItems: number;

  constructor(private store: Store<appState>) { }

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
        this.cardItems = data.length;
      })
    );
  }

  private subscribeUser() {
    this.subscription.add(
      this.user$.subscribe((data: User) => {
        console.log('Usuario en header', data);
        if (data) {
          this.userName = data.userName;
        }
      })
    );
  }

  public setLogged(event) {
    this.logged = event;
  }

  public logout() {
    this.store.dispatch(appActions.logout());
    this.logged = false;
  }

}
