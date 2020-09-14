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

  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private subscription: Subscription = new Subscription();
  public products: Product[];

  constructor(
    private store: Store<appState>,
    private userService: UserService) { }

  ngOnInit(): void {
    // this.getUser();
    this.getFavouriteProducts(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getFavouriteProducts(userId: number) {
    this.subscription.add(
      this.userService.getUserFavourites(userId).subscribe((data: any) => {
        this.products = (data[0] && data[0].favouriteProducts) ? data[0].favouriteProducts : [];
      })
    );
  }

  private getUser() {
    this.subscription.add(
      this.user$.subscribe((data: any) => {
        this.getFavouriteProducts(data.id);
      })
    );
  }
}
