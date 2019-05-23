import { TestBed } from '@angular/core/testing';

import { RecordIdService } from './record-id.service';

describe('RecordIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordIdService = TestBed.get(RecordIdService);
    expect(service).toBeTruthy();
  });
});
