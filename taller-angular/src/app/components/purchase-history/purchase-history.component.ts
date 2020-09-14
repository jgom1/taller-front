import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state.interface';
import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit, OnDestroy {

  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private subscription: Subscription = new Subscription();
  public purchases: Purchase[];

  constructor(
    private store: Store<appState>,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getPurchases(userId: number) {
    this.subscription.add(
      this.userService.getUserPurchases(userId).subscribe((data: Purchase[]) => {
        console.log('Purchases', data);
        this.purchases = data;
      })
    );
  }

  private getUser() {
    this.subscription.add(
      this.user$.subscribe((data: any) => {
        this.getPurchases(data.id);
      })
    );
  }

}
