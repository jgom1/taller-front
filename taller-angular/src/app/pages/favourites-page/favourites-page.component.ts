import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription, Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state.interface';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent implements OnInit, OnDestroy {

  private favourites$: Observable<any[]> = this.store.select((state: any) => state.app.favourites);
  private subscription: Subscription = new Subscription();
  public products: Product[];

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.subscribeFavourites();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private subscribeFavourites(): void {
    this.subscription.add(
      this.favourites$.subscribe((data: any) => {
        this.products = data;
      })
    );
  }
}
