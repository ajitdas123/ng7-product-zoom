import { TestBed } from '@angular/core/testing';

import { Ng7ProductZoomService } from './ng7-product-zoom.service';

describe('Ng7ProductZoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7ProductZoomService = TestBed.get(Ng7ProductZoomService);
    expect(service).toBeTruthy();
  });
});
