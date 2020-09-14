import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appActions } from '../../store/app.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private cart$: Observable<boolean> = this.store.select((state: any) => state.app.cart);
  private cart: any;
  public product: any;
  private id: number;
  private subscription: Subscription = new Subscription();


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<{
      userLogged: boolean,
      user: {},
      cart: {}
    }>
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct();
    this.getCart();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public addToCart() {
    if (Object.keys(this.cart).length === 0 ) {
      console.log('Entra');
      this.cart = {
        items: 1,
        products: this.product
      }
    } else {
      console.log('Entra 2');
      this.cart.items += 1;
      this.cart.products.push(this.product);
    }
    this.store.dispatch(appActions.setCart(this.cart));
  }

  private getCart() {
    this.subscription.add(
      this.cart$.subscribe((data: any) => {
        console.log('Data', data);
        this.cart = data;
        console.log('cart', this.cart);
      })
    );
  }

  private getProduct() {
    this.subscription.add(
      this.productService.getProductById(this.id).subscribe((data: any) => {
        this.product = data;
      })
    );
  }
}
