import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { appState } from '../../store/app.state.interface';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appActions } from '../../store/app.actions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private user$: Observable<User> = this.store.select((state: any) => state.app.user);
  private subscription: Subscription = new Subscription();
  public user: any;
  public changeEmailForm: FormGroup;
  public changeAddressForm: FormGroup;
  public creditCardForm: FormGroup;
  public passwordForm: FormGroup;
  public profilePasswordErrorMessage: string;
  public hidenPassword: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<appState>) { }

  ngOnInit(): void {
    this.subscribeUser();
    this.createForms();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeUser() {
    this.subscription.add(
      this.user$.subscribe((data: User) => {
        this.user = { ...data };
        this.hidePublicPassword();
      })
    );
  }

  private hidePublicPassword() {
    this.hidenPassword = (this.user.userPassword) ? '*'.repeat(this.user.userPassword.length) : '';
  }

  private createEmailForm(): void {
    this.changeEmailForm = this.fb.group({
      personalEmail: ['']
    });
  }

  private createAddressForm(): void {
    this.changeAddressForm = this.fb.group({
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required]
    });
  }

  private createCreditCardForm(): void {
    this.creditCardForm = this.fb.group({
      creditCardHolder: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
      creditCardDate: ['', Validators.required],
    });
  }

  private createPasswordForm(): void {
    this.passwordForm = this.fb.group({
      currentProfilePassword: ['', Validators.required],
      newProfilePassword: ['', Validators.required],
      confirmedProfilePassword: ['', Validators.required],
    });
  }

  private createForms() {
    this.createEmailForm();
    this.createAddressForm();
    this.createCreditCardForm();
    this.createPasswordForm();
  }

  public changeEmail() {
    if (this.user.userEmail !== this.changeEmailForm.get('personalEmail').value) {
      this.user.userEmail = this.changeEmailForm.get('personalEmail').value;
      this.store.dispatch(appActions.setUser(this.user));
    }
    this.changeEmailForm.get('personalEmail').setValue('');
  }

  public changeAddress() {
    // this.user.userAddress.address = this.changeAddressForm.get('address').value;
    // this.user.userAddress.cp = this.changeAddressForm.get('postalCode').value;
    // this.user.userAddress.city = this.changeAddressForm.get('city').value;
    // this.user.userAddress.province = this.changeAddressForm.get('province').value;
    // this.store.dispatch(appActions.setUser(this.user));
    // this.changeAddressForm.get('address').setValue('');
    // this.changeAddressForm.get('postalCode').setValue('');
    // this.changeAddressForm.get('city').setValue('');
    // this.changeAddressForm.get('province').setValue('');
  }

  public addCreditCard() {
    const newCreditCard = {
      "userCreditCardHolder": this.creditCardForm.get('creditCardHolder').value,
      "userCreditCardNumber": this.creditCardForm.get('creditCardNumber').value,
      "userCreditCardDate": this.creditCardForm.get('creditCardDate').value
    }
  }

  public changePassword() {
    if (this.passwordForm.get('currentProfilePassword').value !== this.user.userPassword) {
      this.profilePasswordErrorMessage = 'La contraseña introducida no coincide con la contraseña actual';
    } else {
      if (this.passwordForm.get('newProfilePassword').value !== this.passwordForm.get('confirmedProfilePassword').value) {
        this.profilePasswordErrorMessage = 'Las nuevas contraseñas deben ser iguales';
      } else {
        this.profilePasswordErrorMessage = '';
        console.log('Password correcto');
      }
    }

  }

}
