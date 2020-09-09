import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardModalComponent } from './shopping-card-modal.component';

describe('ShoppingCardModalComponent', () => {
  let component: ShoppingCardModalComponent;
  let fixture: ComponentFixture<ShoppingCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
