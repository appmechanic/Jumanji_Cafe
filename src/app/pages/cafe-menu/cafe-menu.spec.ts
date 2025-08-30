import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeMenu } from './cafe-menu';

describe('CafeMenu', () => {
  let component: CafeMenu;
  let fixture: ComponentFixture<CafeMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
