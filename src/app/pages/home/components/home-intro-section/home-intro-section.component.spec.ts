import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroSectionComponent } from './home-intro-section.component';

describe('HomeIntroSectionComponent', () => {
  let component: HomeIntroSectionComponent;
  let fixture: ComponentFixture<HomeIntroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIntroSectionComponent]
    });
    fixture = TestBed.createComponent(HomeIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
