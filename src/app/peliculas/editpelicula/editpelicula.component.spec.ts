import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpeliculaComponent } from './editpelicula.component';

describe('EditpeliculaComponent', () => {
  let component: EditpeliculaComponent;
  let fixture: ComponentFixture<EditpeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
