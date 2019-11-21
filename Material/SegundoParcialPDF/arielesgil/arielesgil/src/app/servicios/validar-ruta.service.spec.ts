import { TestBed } from '@angular/core/testing';

import { ValidarRutaService } from './validar-ruta.service';

describe('ValidarRutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarRutaService = TestBed.get(ValidarRutaService);
    expect(service).toBeTruthy();
  });
});
