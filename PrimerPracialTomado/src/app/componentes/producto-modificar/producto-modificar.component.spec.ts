import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoModificarComponent } from './producto-modificar.component';

describe('ProductoModificarComponent', () => {
  let component: ProductoModificarComponent;
  let fixture: ComponentFixture<ProductoModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
