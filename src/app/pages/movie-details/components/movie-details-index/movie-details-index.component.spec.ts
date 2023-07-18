import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsIndexComponent } from './movie-details-index.component';

describe('MovieDetailsIndexComponent', () => {
  let component: MovieDetailsIndexComponent;
  let fixture: ComponentFixture<MovieDetailsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsIndexComponent]
    });
    fixture = TestBed.createComponent(MovieDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
