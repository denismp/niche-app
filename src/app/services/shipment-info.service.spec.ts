import { TestBed } from '@angular/core/testing';

import { ShipmentInfoService } from './shipment-info.service';

describe('ShipmentInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipmentInfoService = TestBed.get(ShipmentInfoService);
    expect(service).toBeTruthy();
  });
});
