import { TestBed } from '@angular/core/testing';

import { DoctorAuthenticationService } from './doctor-authentication.service';

describe('DoctorAuthenticationService', () => {
  let service: DoctorAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
