import { TestBed } from '@angular/core/testing';

import { PeliculasService } from './peliculas.service';

describe('PeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculasService = TestBed.get(PeliculasService);
    expect(service).toBeTruthy();
  });
});
