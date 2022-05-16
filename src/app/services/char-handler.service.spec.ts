import { TestBed } from '@angular/core/testing';

import { CharHandlerService } from './char-handler.service';

describe('CharHandlerService', () => {
  let service: CharHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
