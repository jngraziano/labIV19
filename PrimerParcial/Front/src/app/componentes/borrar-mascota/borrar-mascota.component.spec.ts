import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarproductoComponent } from './borrar-mascota.component';

describe('BorrarproductoComponent', () => {
  let component: BorrarproductoComponent;
  let fixture: ComponentFixture<BorrarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
