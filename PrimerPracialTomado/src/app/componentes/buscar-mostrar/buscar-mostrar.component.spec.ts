import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMostrarComponent } from './buscar-mostrar.component';

describe('BuscarMostrarComponent', () => {
  let component: BuscarMostrarComponent;
  let fixture: ComponentFixture<BuscarMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
