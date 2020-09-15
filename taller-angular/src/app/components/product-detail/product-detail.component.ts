import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appActions } from '../../store/app.actions';
import { appState } from '../../store/app.state.interface';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private logged$: Observable<boolean> = this.store.select((state: any) => state.app.userLogged);
  private cart$: Observable<Product[]> = this.store.select((state: any) => state.app.cart);
  private cart: Product[];
  private subscription: Subscription = new Subscription();
  public product: Product;
  public logged: boolean;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<appState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getProduct(routeParams['id']);
      this.getCart();
      this.subscribeLogged();
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
      })
    );
  }

  public addToCart() {
    this.cart = [...this.cart, this.product];
    this.store.dispatch(appActions.setCart({ cart: this.cart }));
  }
}
