import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnInit, TemplateRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() items: any[] = [];
  @Input() showIndicators = true;
  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>;
  
  displayItems: any[] = [];
  visibleItems: any[] = [];
  currentIndex = 0;
  translateX = 0;
  isAnimating = false;
  
  // Responsive configuration
  visibleItemsCount = 3; // Default for large screens
  itemWidth = 0;
  containerWidth = 0;
  resizeTimeout: any;

  ngOnInit() {
    this.calculateResponsiveLayout();
    if (this.items && this.items.length) {
      this.setupInfiniteSlider();
    }
  }

  ngAfterViewInit() {
    if (!this.displayItems.length && this.items && this.items.length) {
      setTimeout(() => {
        this.calculateResponsiveLayout();
        this.setupInfiniteSlider();
      }, 0);
    }
  }

  ngOnDestroy() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  @HostListener('window:resize')
  onResize() {
    // Debounce resize events
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.calculateResponsiveLayout();
      this.setupInfiniteSlider();
    }, 200);
  }

  calculateResponsiveLayout() {
    const width = window.innerWidth;
    
    // Set visible items count based on screen size
    if (width < 768) { // Mobile
      this.visibleItemsCount = 1;
    } else if (width < 992) { // Tablet
      this.visibleItemsCount = 2;
    } else { // Desktop
      this.visibleItemsCount = 3;
    }
    
    // Calculate container width and item width
    this.containerWidth = document.querySelector('.slider-wrapper')?.clientWidth || window.innerWidth * 0.8;
    this.itemWidth = this.containerWidth / this.visibleItemsCount;
  }

  setupInfiniteSlider() {
    if (!this.items || this.items.length === 0) return;
    
    // Calculate responsive dimensions first
    this.calculateResponsiveLayout();
    
    // Create a display array with cloned items at beginning and end
    this.displayItems = [
      ...this.items.slice(-this.visibleItemsCount),
      ...this.items,
      ...this.items.slice(0, this.visibleItemsCount)
    ];
    
    // Initialize visibleItems
    this.updateVisibleItems();
    
    // Initial position shows the actual first items (after the cloned last items)
    this.currentIndex = this.visibleItemsCount;
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -1 * (this.currentIndex * this.itemWidth);
  }

  navigateNext() {
    if (this.isAnimating || !this.items.length) return;
    
    this.isAnimating = true;
    this.currentIndex++;
    this.updateTranslateX();
    
    if (this.currentIndex >= this.items.length + this.visibleItemsCount) {
      setTimeout(() => {
        this.isAnimating = false;
        this.currentIndex = this.visibleItemsCount;
        this.updateTranslateX();
      }, 300);
    } else {
      setTimeout(() => this.isAnimating = false, 300);
    }
    
    this.updateVisibleItems();
  }

  navigatePrev() {
    if (this.isAnimating || !this.items.length) return;
    
    this.isAnimating = true;
    this.currentIndex--;
    this.updateTranslateX();
    
    if (this.currentIndex < this.visibleItemsCount) {
      setTimeout(() => {
        this.isAnimating = false;
        this.currentIndex = this.items.length + this.visibleItemsCount - 1;
        this.updateTranslateX();
      }, 300);
    } else {
      setTimeout(() => this.isAnimating = false, 300);
    }
    
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const activeIndex = (this.currentIndex - this.visibleItemsCount + this.items.length) % this.items.length;
    const startIdx = Math.max(0, activeIndex);
    const endIdx = Math.min(startIdx + this.visibleItemsCount, this.items.length);
    this.visibleItems = this.items.slice(startIdx, endIdx);
    
    if (endIdx - startIdx < this.visibleItemsCount && this.items.length > this.visibleItemsCount) {
      // Add items from the beginning if we're at the end of the array
      this.visibleItems = [...this.visibleItems, ...this.items.slice(0, this.visibleItemsCount - (endIdx - startIdx))];
    }
  }

  goToSlide(index: number) {
    if (this.isAnimating || !this.items.length) return;
    
    this.isAnimating = true;
    this.currentIndex = index + this.visibleItemsCount;
    this.updateTranslateX();
    this.updateVisibleItems();
    
    setTimeout(() => this.isAnimating = false, 300);
  }

  trackByFn(index: number, item: any) {
    return index;
  }

  getItemClasses(index: number) {
    return {
      'col-12': this.visibleItemsCount === 1,
      'col-md-6': this.visibleItemsCount === 2,
      'col-lg-4': this.visibleItemsCount === 3
    };
  }
}