import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriasAlumnoComponent } from './listado-materias-alumno.component';

describe('ListadoMateriasAlumnoComponent', () => {
  let component: ListadoMateriasAlumnoComponent;
  let fixture: ComponentFixture<ListadoMateriasAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriasAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
