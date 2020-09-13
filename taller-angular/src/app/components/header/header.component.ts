import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { appActions } from '../../store/app.actions';
import { state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private user$: Observable<any> = this.store.select((state: any) => state.app.user);
  logged: boolean = false;
  userName: string = '';
  cardItems: number;

  constructor(private store: Store<{
    userLogged: boolean,
    user: any
  }>) { }

  ngOnInit(): void {
    this.user$.subscribe((data: any) => {
      console.log('Usuario en header',data);
      if (data) {
        this.userName = data.userName;
      }
    });
    this.cardItems = 0;
  }

  public setLogged(event) {
    this.logged = event;
  }

  public logout() {
    this.store.dispatch(appActions.logout());
    this.logged = false;
  }

}
