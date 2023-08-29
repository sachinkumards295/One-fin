import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPopupComponent } from './movies-popup.component';

describe('MoviesPopupComponent', () => {
  let component: MoviesPopupComponent;
  let fixture: ComponentFixture<MoviesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
