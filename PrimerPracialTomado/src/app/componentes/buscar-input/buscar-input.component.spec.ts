import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInputComponent } from './buscar-input.component';

describe('BuscarInputComponent', () => {
  let component: BuscarInputComponent;
  let fixture: ComponentFixture<BuscarInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
