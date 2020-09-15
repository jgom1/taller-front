import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appActions } from '../../store/app.actions';
import { appState } from '../../store/app.state.interface';
import { Product } from '../../models/product.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private logged$: Observable<boolean> = this.store.select((state: any) => state.app.userLogged);
  private cart$: Observable<Product[]> = this.store.select((state: any) => state.app.cart);
  private favourites$: Observable<any[]> = this.store.select((state: any) => state.app.favourites);
  private favouritesId$: Observable<any[]> = this.store.select((state: any) => state.app.favouritesId);
  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private cart: Product[];
  private favourites: Product[];
  private favouritesId: any;
  private user: User;
  private subscription: Subscription = new Subscription();
  public product: Product;
  public logged: boolean;
  public isFavourite: boolean;
  private productId: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    private store: Store<appState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.productId = parseInt(routeParams['id'], 10);
      this.getProduct(this.productId);
      this.getCart();
      this.subscribeLogged();
      this.subscribeFavourites(this.productId);
      this.subscribeUser();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCart() {
    this.subscription.add(
      this.cart$.subscribe((data: any) => {
        this.cart = data;
      })
    );
  }

  private getProduct(id: number) {
    this.subscription.add(
      this.productService.getProductById(id).subscribe((data: any) => {
        this.product = data;
      })
    );
  }

  private subscribeLogged(): void {
    this.subscription.add(
      this.logged$.subscribe((data: any) => {
        this.logged = data;
        this.subscribeFavouritesId();
        this.subscribeFavourites(this.productId);
        this.subscribeUser();
      })
    );
  }

  private subscribeFavourites(productId: number): void {
    this.subscription.add(
      this.favourites$.subscribe((data: any) => {
        this.favourites = data;
        this.isFavourite = this.checkFavouriteProduct(data, productId);
      })
    );
  }

  private subscribeFavouritesId(): void {
    this.subscription.add(
      this.favouritesId$.subscribe((data: any) => {
        this.favouritesId = data.favouritesId;
      })
    );
  }

  private subscribeUser() {
    this.subscription.add(
      this.user$.subscribe((data: User) => {
        if (data) {
          this.user = data;
        }
      })
    );
  }

  private checkFavouriteProduct(favourites: Product[], currentId: number) {
    for (const key in favourites) {
      if (favourites[key].id === currentId) {
        return true;
      }
    }
    return false;
  }

  private updateFavourites() {
    const updatedFavourites = {
      "id": this.favouritesId,
      "userId": this.user.id,
      "favouriteProducts": this.favourites
    };
    this.subscription.add(
      this.userService.updateFavourites(updatedFavourites).subscribe((data) => { })
    );
  }

  public addToCart() {
    this.cart = [...this.cart, this.product];
    this.store.dispatch(appActions.setCart({ cart: this.cart }));
  }

  public addProductToFavourites() {
    this.favourites = [...this.favourites, this.product];
    this.store.dispatch(appActions.setFavourites({ favourites: this.favourites }));
    this.updateFavourites();
  }

  public removeProductFromFavourites() {
    this.favourites = [...this.favourites].filter((value) => value.id !== this.product.id);
    this.store.dispatch(appActions.setFavourites({ favourites: this.favourites }));
    this.updateFavourites();
  }
}
