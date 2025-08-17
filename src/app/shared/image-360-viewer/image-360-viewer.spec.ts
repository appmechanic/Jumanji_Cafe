import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Image360ViewerComponent } from './image-360-viewer';

describe('Image360ViewerComponent', () => {
  let component: Image360ViewerComponent;
  let fixture: ComponentFixture<Image360ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Image360ViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image360ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});