import { Component, Input, ContentChild, TemplateRef, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss'],
  standalone: true,
  imports: [CommonModule] 
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() items: any[] = [];
  @Input() visibleCount = 3;
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;
  
  displayItems: any[] = [];
  visibleItems: any[] = []; 
  startIndex = 0;
  itemWidth = 0;
  translateX = 0;
  isAnimating = false;
  currentActiveIndex = 0; 

  constructor(@Inject(ElementRef) private el: ElementRef<any>) {}

  ngOnInit() {
    this.displayItems = [...this.items, ...this.items.slice(0, this.visibleCount)];
    this.updateVisibleItems();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateItemWidth();
    });
  }

  private calculateItemWidth() {
    const container = this.el.nativeElement.querySelector('.slider-content');
    if (container) {
      this.itemWidth = container.offsetWidth / this.visibleCount;
    }
  }

  private updateVisibleItems() {
    this.visibleItems = this.items.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  next() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.startIndex++;
    this.translateX = -this.startIndex * this.itemWidth;
    this.updateVisibleItems();
    
    this.currentActiveIndex = this.startIndex % this.items.length;

    if (this.startIndex >= this.items.length) {
      setTimeout(() => {
        this.isAnimating = false;
        this.startIndex = 0;
        this.translateX = 0;
        this.updateVisibleItems();
        this.currentActiveIndex = 0;
      }, 500); 
    } else {
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    }
  }

  prev() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    if (this.startIndex === 0) {
      this.startIndex = this.items.length;
      this.translateX = -this.startIndex * this.itemWidth;
      
      this.el.nativeElement.offsetHeight;
    }
    
    this.startIndex--;
    this.translateX = -this.startIndex * this.itemWidth;
    this.updateVisibleItems();
    
    this.currentActiveIndex = this.startIndex % this.items.length;
    if (this.currentActiveIndex < 0) this.currentActiveIndex = this.items.length - 1;

    setTimeout(() => {
      this.isAnimating = false;
    }, 500); 
  }
  
  goToSlide(index: number) {
    if (this.isAnimating || index === this.currentActiveIndex) return;
    
    this.isAnimating = true;
    this.startIndex = index;
    this.currentActiveIndex = index;
    this.translateX = -this.startIndex * this.itemWidth;
    this.updateVisibleItems();
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
}