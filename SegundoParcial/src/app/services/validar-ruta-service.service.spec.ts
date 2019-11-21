import { TestBed } from '@angular/core/testing';

import { ValidarRutaServiceService } from './validar-ruta-service.service';

describe('ValidarRutaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarRutaServiceService = TestBed.get(ValidarRutaServiceService);
    expect(service).toBeTruthy();
  });
});
