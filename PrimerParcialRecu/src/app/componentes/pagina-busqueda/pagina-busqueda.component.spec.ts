import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBusquedaComponent } from './pagina-busqueda.component';

describe('PaginaBusquedaComponent', () => {
  let component: PaginaBusquedaComponent;
  let fixture: ComponentFixture<PaginaBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
