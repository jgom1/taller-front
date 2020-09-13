import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasesPageComponent } from './pages/purchases-page/purchases-page.component';
import { AnonymousPageComponent } from './pages/anonymous-page/anonymous-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: 'products', component: ProductListPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'favorites', component: FavouritesPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'purchases', component: PurchasesPageComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'other', component: AnonymousPageComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: ProductListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
