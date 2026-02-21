import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePage } from './course-page.component';

describe('CoursePage', () => {
  let component: CoursePage;
  let fixture: ComponentFixture<CoursePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
