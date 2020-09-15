import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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

  private logged$: Observable<boolean> = this.store.select((state: any) => state.app.userLogged);
  public loginForm: FormGroup;
  public errorMessage: string;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store<appState>) { }

  ngOnInit(): void {
    this.subscribeLogged();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login() {
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

  private subscribeLogged(): void {
    this.subscription.add(
      this.logged$.subscribe((data: any) => {
        if (data === true) {
          document.getElementById('closeModal').click();
        }
      })
    );
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private solveSuccessfulLogin(user: any): void {
    this.loginForm.get('email').setValue('');
    this.loginForm.get('password').setValue('');
    this.errorMessage = '';
    this.store.dispatch(appActions.login());
    this.store.dispatch(appActions.setUser(user));
  }

}
