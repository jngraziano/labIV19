import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProferorPageComponent } from './proferor-page.component';

describe('ProferorPageComponent', () => {
  let component: ProferorPageComponent;
  let fixture: ComponentFixture<ProferorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProferorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProferorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
