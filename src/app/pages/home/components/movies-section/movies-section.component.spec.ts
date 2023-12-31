import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSectionComponent } from './movies-section.component';

describe('MoviesSectionComponent', () => {
  let component: MoviesSectionComponent;
  let fixture: ComponentFixture<MoviesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSectionComponent]
    });
    fixture = TestBed.createComponent(MoviesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
