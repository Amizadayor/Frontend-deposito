import { TestBed } from '@angular/core/testing';

import { ProductoventaService } from './productoventa.service';

describe('ProductoventaService', () => {
  let service: ProductoventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
