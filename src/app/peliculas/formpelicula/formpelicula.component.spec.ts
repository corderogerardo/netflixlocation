import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpeliculaComponent } from './formpelicula.component';

describe('FormpeliculaComponent', () => {
  let component: FormpeliculaComponent;
  let fixture: ComponentFixture<FormpeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
