import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarproductoComponent } from './mostrar-producto.component';

describe('MostrarproductoComponent', () => {
  let component: MostrarproductoComponent;
  let fixture: ComponentFixture<MostrarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
