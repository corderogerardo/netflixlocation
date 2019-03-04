import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpeliculasComponent } from './mainpeliculas.component';

describe('MainpeliculasComponent', () => {
  let component: MainpeliculasComponent;
  let fixture: ComponentFixture<MainpeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
