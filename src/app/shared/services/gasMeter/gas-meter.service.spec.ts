import { TestBed } from '@angular/core/testing';

import { GasMeterService } from './gas-meter.service';

describe('GasMeterService', () => {
  let service: GasMeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasMeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
