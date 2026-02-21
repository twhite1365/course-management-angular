import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsPage } from './instructors-page.component';

describe('InstructorsPageComponent', () => {
  let component: InstructorsPage;
  let fixture: ComponentFixture<InstructorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
