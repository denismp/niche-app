import { TestBed } from '@angular/core/testing';

import { ParentAsinService } from './parent-asin.service';

describe('ParentAsinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentAsinService = TestBed.get(ParentAsinService);
    expect(service).toBeTruthy();
  });
});
