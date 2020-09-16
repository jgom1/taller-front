import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  private products: Product[];
  public userFilter: string;
  public brandFilter: string = 'noBrandFilter';
  public priceFilter: string = 'noPriceFilter';
  public filteredProducts: Product[];
  public brands: string[];
  public prices: number[][];

  constructor(
    private productService: ProductService,
    private shareService: ShareDataService
  ) { }

  ngOnInit(): void {
    this.subscribeProducts();
    this.subscribeBrands();
    this.createPricesArray();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createPricesArray() {
    this.prices = [[0, 200], [200, 400], [400, 750], [750, 1000], [1000]];
  }

  private subscribeProducts(): void {
    this.subscription.add(
      this.productService.getProducts().subscribe((productsData: Product[]) => {
        this.products = productsData;
        this.shareService.updateProducts(this.products);
      })
    );
  }

  private subscribeBrands(): void {
    this.subscription.add(
      this.productService.getBrands().subscribe((brandsData: string[]) => {
        this.brands = brandsData.sort();
      })
    );
  }

  private filterByUser(unfilteredProducts: Product[]): Product[] {
    return unfilteredProducts.filter((product: Product) => (product.productName.toUpperCase()).includes(this.userFilter.toUpperCase().trim()));
  }

  private filterByBrand(unfilteredProducts: Product[]): Product[] {
    return unfilteredProducts.filter((product: Product) => (product.productBrand).includes(this.brandFilter));
  }

  private filterByPrice(unfilteredProducts: Product[]): Product[] {
    return unfilteredProducts.filter((product: Product) => {
      if (this.prices[this.priceFilter].length > 1) {
        return product.productPrice >= this.prices[this.priceFilter][0] && product.productPrice < this.prices[this.priceFilter][1];
      } else {
        return product.productPrice >= this.prices[this.priceFilter][0];
      }
    });
  }

  private applyFilters() {
    if (this.userFilter) {
      this.filteredProducts = this.filterByUser(this.filteredProducts);
    }
    if (this.brandFilter !== 'noBrandFilter') {
      this.filteredProducts = this.filterByBrand(this.filteredProducts);
    }
    if (this.priceFilter !== 'noPriceFilter') {
      this.filteredProducts = this.filterByPrice(this.filteredProducts);
    }
  }

  public filterProducts(): void {
    this.filteredProducts = this.products;
    this.applyFilters();
    this.shareService.updateProducts(this.filteredProducts);
  }

}
