import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appState } from './store/app.state.interface';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  private logged$: Observable<boolean> = this.store.select((state: any) => state.app.userLogged);
  private logged: boolean;
  private subscription: Subscription = new Subscription();

  constructor(
    private store: Store<appState>,
    private router: Router) {
    this.subscription.add(this.logged$.subscribe((data: boolean) => {
      this.logged = data;
    }));
  }

  canActivate(): boolean {
    if (!this.logged) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}
