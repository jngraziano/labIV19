import { TestBed } from '@angular/core/testing';

import { ValidarutaService } from './validaruta.service';

describe('ValidarutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarutaService = TestBed.get(ValidarutaService);
    expect(service).toBeTruthy();
  });
});
