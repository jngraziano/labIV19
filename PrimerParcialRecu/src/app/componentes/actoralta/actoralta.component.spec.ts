import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoraltaComponent } from './actoralta.component';

describe('ActoraltaComponent', () => {
  let component: ActoraltaComponent;
  let fixture: ComponentFixture<ActoraltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActoraltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoraltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
