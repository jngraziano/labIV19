import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoPageComponent } from './alumno-page.component';

describe('AlumnoPageComponent', () => {
  let component: AlumnoPageComponent;
  let fixture: ComponentFixture<AlumnoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
