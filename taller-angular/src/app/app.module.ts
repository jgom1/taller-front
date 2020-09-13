import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PromotionProductComponent } from './components/promotion-product/promotion-product.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShoppingCardModalComponent } from './components/shopping-card-modal/shopping-card-modal.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PurchasesPageComponent } from './pages/purchases-page/purchases-page.component';
import { environment } from '../environments/environment.prod';
import { AnonymousPageComponent } from './pages/anonymous-page/anonymous-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PromotionProductComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    ShoppingCardModalComponent,
    PaymentComponent,
    PurchaseHistoryComponent,
    ProductListPageComponent,
    ProductDetailPageComponent,
    FavouritesPageComponent,
    ProfilePageComponent,
    PurchasesPageComponent,
    AnonymousPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
