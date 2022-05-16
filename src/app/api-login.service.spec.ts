import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiLoginService } from './api-login.service';

describe('ApiLoginService', () => {
  let service: ApiLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: HttpClient, useValue: HttpClientStub},{provide: Router , useValue: RouterStub}]
    });
    service = TestBed.inject(ApiLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let HttpClientStub: Partial<HttpClient>;
  HttpClientStub = {};

  let RouterStub: Partial<Router>;
  RouterStub = {};
});
