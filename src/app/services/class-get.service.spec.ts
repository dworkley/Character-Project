import { TestBed } from '@angular/core/testing';

import { ClassGetService } from './class-get.service';

describe('ClassGetService', () => {
  let service: ClassGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
