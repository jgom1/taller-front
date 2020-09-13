import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appActions } from '../../store/app.actions';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loggedEmitter = new EventEmitter<boolean>();
  private logged$: Observable<boolean> = this.store.select((state: any) => state.app.userLogged);
  public email: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private userService: UserService,
    private store: Store<{
      userLogged: boolean,
      user:{}
    }>) { }

  ngOnInit(): void {
    this.logged$.subscribe((data: any) => {
      if (data === true) {
        this.loggedEmitter.emit(data);
        document.getElementById('closeModal').click();
      }
    });
  }

  public login() {
    this.userService.getUserByEmail(this.email).subscribe((user: any) => {
      if (user.length == 0 || user[0].userPassword !== this.password) {
        this.errorMessage = 'El usuario introducido no existe o los datos no son correctos.'
        console.log('No existe ese ususario o la contraseña no coincide');
      } else {
        this.errorMessage = '';
        this.store.dispatch(appActions.login());
        this.store.dispatch(appActions.setUser(user[0]));
      }
    });
  }

}
