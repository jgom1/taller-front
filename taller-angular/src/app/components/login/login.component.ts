import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { appActions } from '../../store/app.actions';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appState } from '../../store/app.state.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public errorMessage: string;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store<appState>) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private solveSuccessfulLogin(user: any): void {
    this.resetForm();
    this.store.dispatch(appActions.login());
    this.store.dispatch(appActions.setUser(user));
    this.getUserFavourites(user.id);
    document.getElementById('closeLoginModal').click();
  }

  private getUserFavourites(userId: number) {
    this.subscription.add(
      this.userService.getUserFavourites(userId).subscribe((userFavourites: any) => {
        this.store.dispatch(appActions.setFavourites({ favourites: (userFavourites.length>0)?userFavourites[0].favouriteProducts:[] }));
        this.store.dispatch(appActions.setFavouritesId({ favouritesId: (userFavourites.length>0)?userFavourites[0].id:0 }));
      })
    );
  }

  private resetForm() {
    this.loginForm.get('email').setValue('');
    this.loginForm.get('password').setValue('');
    this.errorMessage = '';
  }

  public login(): void {
    this.subscription.add(
      this.userService.getUserByEmail(this.loginForm.get('email').value).subscribe((data: any) => {
        if (data.length == 0 || data[0].userPassword !== this.loginForm.get('password').value) {
          this.errorMessage = 'El usuario introducido no existe o los datos no son correctos.'
        } else {
          this.solveSuccessfulLogin(data[0]);
        }
      })
    );
  }

}
