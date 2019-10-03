import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaproductoComponent } from './busqueda-producto.component';

describe('BusquedaproductoComponent', () => {
  let component: BusquedaproductoComponent;
  let fixture: ComponentFixture<BusquedaproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
