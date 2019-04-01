import { TestBed } from '@angular/core/testing';

import { CriteriaYesNoService } from './criteria-yes-no.service';

describe('CriteriaYesNoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriteriaYesNoService = TestBed.get(CriteriaYesNoService);
    expect(service).toBeTruthy();
  });
});
