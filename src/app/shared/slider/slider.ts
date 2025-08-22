import { Component, Input, ContentChild, TemplateRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent as ImportedSliderComponent } from './slider';

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
  visibleItems: any[] = []; // Keep this for backward compatibility
  startIndex = 0;
  itemWidth = 0;
  translateX = 0;
  isAnimating = false;
  currentActiveIndex = 0; // Track the active indicator

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Create a display array with duplicate items for the infinite effect
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
    // Update visible items for backward compatibility
    this.visibleItems = this.items.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  next() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.startIndex++;
    this.translateX = -this.startIndex * this.itemWidth;
    this.updateVisibleItems();
    
    // Update active index for indicators
    this.currentActiveIndex = this.startIndex % this.items.length;

    // If we've reached the end of the original items, reset to beginning after animation
    if (this.startIndex >= this.items.length) {
      setTimeout(() => {
        this.isAnimating = false;
        this.startIndex = 0;
        this.translateX = 0;
        this.updateVisibleItems();
        this.currentActiveIndex = 0;
      }, 500); // Match the transition duration
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
      // If at the beginning, prepare to loop back to the end
      this.startIndex = this.items.length;
      this.translateX = -this.startIndex * this.itemWidth;
      
      // Force reflow to make the jump instant without animation
      this.el.nativeElement.offsetHeight;
    }
    
    this.startIndex--;
    this.translateX = -this.startIndex * this.itemWidth;
    this.updateVisibleItems();
    
    // Update active index for indicators
    this.currentActiveIndex = this.startIndex % this.items.length;
    if (this.currentActiveIndex < 0) this.currentActiveIndex = this.items.length - 1;

    setTimeout(() => {
      this.isAnimating = false;
    }, 500); // Match the transition duration
  }
  
  // Add method to navigate to specific slide
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