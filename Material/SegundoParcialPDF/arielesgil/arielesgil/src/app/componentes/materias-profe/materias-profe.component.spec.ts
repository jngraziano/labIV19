import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasProfeComponent } from './materias-profe.component';

describe('MateriasProfeComponent', () => {
  let component: MateriasProfeComponent;
  let fixture: ComponentFixture<MateriasProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
