import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private user: User;
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.subscribeUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeUser() {
    this.subscription.add(
      this.user$.subscribe((data: User) => {
        this.user = data;
      })
    );
  }

}
