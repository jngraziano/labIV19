import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosProfeComponent } from './alumnos-profe.component';

describe('AlumnosProfeComponent', () => {
  let component: AlumnosProfeComponent;
  let fixture: ComponentFixture<AlumnosProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
