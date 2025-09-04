import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnInit, TemplateRef, AfterViewInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

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
  langChangeSubscription?: Subscription;
  
  // RTL support
  isRTL = false;

  // Add this property to track the active indicator
  activeIndicatorIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.detectRTL();
    this.calculateResponsiveLayout();
    if (this.items && this.items.length) {
      this.setupInfiniteSlider();
    }
    
    // Listen for language changes
    this.setupLanguageListener();
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
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  // Detect if current language is RTL
  detectRTL() {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.querySelector('html');
      this.isRTL = htmlElement?.dir === 'rtl' || htmlElement?.lang === 'ar';
    }
  }

  // Setup language change listener
  setupLanguageListener() {
    if (isPlatformBrowser(this.platformId)) {
      // Use MutationObserver to detect changes in dir attribute or lang attribute
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' && 
             (mutation.attributeName === 'dir' || mutation.attributeName === 'lang')) {
            this.detectRTL();
            this.setupInfiniteSlider();
          }
        }
      });
      
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        observer.observe(htmlElement, { attributes: true });
      }
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
    if (isPlatformBrowser(this.platformId)) {
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
    this.activeIndicatorIndex = 0;
    this.updateTranslateX();
  }

  updateTranslateX() {
    // Adjust direction for RTL
    if (this.isRTL) {
      // For RTL, keep the same calculation as LTR but adjust the item ordering in CSS
      this.translateX = -1 * (this.currentIndex * this.itemWidth);
    } else {
      this.translateX = -1 * (this.currentIndex * this.itemWidth);
    }
  }

  navigateNext() {
    if (this.isAnimating || !this.items.length) return;
    
    this.isAnimating = true;
    
    // In RTL mode, "next" means going left (decreasing the current index)
    if (this.isRTL) {
      this.currentIndex--;
    } else {
      this.currentIndex++;
    }
    
    this.updateTranslateX();
    
    // Update the active indicator based on direction
    if (this.isRTL) {
      this.activeIndicatorIndex = (this.activeIndicatorIndex - 1 + this.items.length) % this.items.length;
    } else {
      this.activeIndicatorIndex = (this.activeIndicatorIndex + 1) % this.items.length;
    }
    
    if ((this.isRTL && this.currentIndex < this.visibleItemsCount) || 
        (!this.isRTL && this.currentIndex >= this.items.length + this.visibleItemsCount)) {
      setTimeout(() => {
        this.isAnimating = false;
        this.currentIndex = this.isRTL ? 
          this.items.length + this.visibleItemsCount - 1 : 
          this.visibleItemsCount;
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
    
    // In RTL mode, "prev" means going right (increasing the current index)
    if (this.isRTL) {
      this.currentIndex++;
    } else {
      this.currentIndex--;
    }
    
    this.updateTranslateX();
    
    // Update the active indicator based on direction
    if (this.isRTL) {
      this.activeIndicatorIndex = (this.activeIndicatorIndex + 1) % this.items.length;
    } else {
      this.activeIndicatorIndex = (this.activeIndicatorIndex - 1 + this.items.length) % this.items.length;
    }
    
    if ((this.isRTL && this.currentIndex >= this.items.length + this.visibleItemsCount) || 
        (!this.isRTL && this.currentIndex < this.visibleItemsCount)) {
      setTimeout(() => {
        this.isAnimating = false;
        this.currentIndex = this.isRTL ? 
          this.visibleItemsCount : 
          this.items.length + this.visibleItemsCount - 1;
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
    this.activeIndicatorIndex = index; // Set the active indicator directly
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
  
  // Get navigation button positions based on RTL
  get navPrevClass() {
    return this.isRTL ? 'slider-nav-next btn-purple mx-2' : 'slider-nav-prev btn-purple mx-2';
  }
  
  get navNextClass() {
    return this.isRTL ? 'slider-nav-prev btn-yellow mx-2' : 'slider-nav-next btn-yellow mx-2';
  }
  
  // Get direction-appropriate chevron icons
  get prevIcon() {
    return this.isRTL ? 'bi-chevron-right' : 'bi-chevron-left';
  }
  
  get nextIcon() {
    return this.isRTL ? 'bi-chevron-left' : 'bi-chevron-right';
  }
}