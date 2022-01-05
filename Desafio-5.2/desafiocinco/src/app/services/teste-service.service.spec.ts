import { TestBed } from '@angular/core/testing';

import { TesteServiceService } from './teste-service.service';

describe('TesteServiceService', () => {
  let service: TesteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
