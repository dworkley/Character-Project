import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiLoginService } from '../api-login.service';
import { Router } from '@angular/router';

import { LoginPageComponent } from './Login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      providers:[{provide: ApiLoginService, useValue: ApiLoginServiceStub},{provide: Router, useValue : RouterStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  let ApiLoginServiceStub: Partial<ApiLoginService>;
  ApiLoginServiceStub = {};

  let RouterStub: Partial<Router>;
  RouterStub = {};
});
