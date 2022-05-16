import { TestBed } from '@angular/core/testing';
import { ApiLoginService } from '../api-login.service'

import { JwtHandlerService } from './jwt-handler.service';

describe('JwtHandlerService', () => {
  let service: JwtHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: ApiLoginService, useValue: ApiLoginServiceStub}]
    });
    service = TestBed.inject(JwtHandlerService);
  });

  /*it('should be created', () => {
    expect(service).toBeTruthy();            //not sure what this does just yet honestly
  });*/

  let ApiLoginServiceStub: Partial<ApiLoginService>;
  ApiLoginServiceStub = {};
});
