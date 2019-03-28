import { TestBed } from '@angular/core/testing';

import { CompetitorsToTargetService } from './competitors-to-target.service';

describe('CompetitorsToTargetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetitorsToTargetService = TestBed.get(CompetitorsToTargetService);
    expect(service).toBeTruthy();
  });
});
