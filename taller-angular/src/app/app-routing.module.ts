import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PurchasesPageComponent } from './pages/purchases-page/purchases-page.component';
import { AnonymousPageComponent } from './pages/anonymous-page/anonymous-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AppGuard } from './app-guard.guard';

const routes: Routes = [
  { path: 'products', component: ProductListPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
  { path: 'favourites', component: FavouritesPageComponent, canActivate: [AppGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AppGuard] },
  { path: 'purchases', component: PurchasesPageComponent, canActivate: [AppGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AppGuard] },
  { path: 'other', component: AnonymousPageComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: ProductListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
