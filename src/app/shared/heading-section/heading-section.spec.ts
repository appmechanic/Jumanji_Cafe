import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSection } from './heading-section';

describe('HeadingSection', () => {
  let component: HeadingSection;
  let fixture: ComponentFixture<HeadingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
