import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPeliculasComponent } from './alta-peliculas.component';

describe('AltaPeliculasComponent', () => {
  let component: AltaPeliculasComponent;
  let fixture: ComponentFixture<AltaPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
