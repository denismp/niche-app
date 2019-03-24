import { TestBed } from '@angular/core/testing';

import { OurCompanyService } from './our-company.service';

describe('OurCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurCompanyService = TestBed.get(OurCompanyService);
    expect(service).toBeTruthy();
  });
});
