import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { appState } from '../../store/app.state.interface';
import { Store } from '@ngrx/store';
import { appActions } from '../../store/app.actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  public registrationForm: FormGroup;
  private subscription: Subscription = new Subscription();
  public errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store<appState>
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createForm(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required]
    });
  }

  private solveSuccessfulRegister(user: any): void {
    this.resetForm();
    this.store.dispatch(appActions.login());
    this.store.dispatch(appActions.setUser(user));
    document.getElementById('closeRegistrationModal').click();
  }

  private resetForm(): void {
    this.registrationForm.get('name').setValue('');
    this.registrationForm.get('surname').setValue('');
    this.registrationForm.get('email').setValue('');
    this.registrationForm.get('password').setValue('');
    this.registrationForm.get('confirmedPassword').setValue('');
  }

  private createUserObject(): User {
    return {
      "userName": this.registrationForm.get('name').value,
      "userSurname": this.registrationForm.get('surname').value,
      "userEmail": this.registrationForm.get('email').value,
      "userPassword": this.registrationForm.get('password').value,
    };
  }

  private createUser(userObject: User) {
    this.subscription.add(
      this.userService.addNewUser(userObject).subscribe((newUser: User) => {
        this.solveSuccessfulRegister(newUser);
      })
    );
  }

  private checkEmail() {
    this.subscription.add(
      this.userService.getUserByEmail(this.registrationForm.get('email').value).subscribe((data: any) => {
        if (data.length === 0) {
          this.errorMessage = '';
          this.createUser(this.createUserObject());
        } else {
          this.errorMessage = 'Ya existe un usuario con ese correo';
        }
      })
    );
  }

  public register() {
    if (this.registrationForm.get('password').value !== this.registrationForm.get('confirmedPassword').value) {
      this.errorMessage = 'Las contraseñas deben coincidir';
    } else {
      this.errorMessage = '';
      this.checkEmail();
    }
  }

}
