import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeActoresComponent } from './listado-de-actores.component';

describe('ListadoDeActoresComponent', () => {
  let component: ListadoDeActoresComponent;
  let fixture: ComponentFixture<ListadoDeActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDeActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
