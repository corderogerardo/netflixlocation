import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitpeliculasComponent } from './initpeliculas.component';

describe('InitpeliculasComponent', () => {
  let component: InitpeliculasComponent;
  let fixture: ComponentFixture<InitpeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitpeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
