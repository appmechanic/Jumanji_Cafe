import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../i18n.service'; // Add this import

type Testimonial = {
  author: string;
  tag: string;
  qualities: string;
};

type TestimonialDisplay = {
  image?: string;
  rating?: number;
  trophies?: number;
  icons?: string[];
};

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  templateUrl: './testimonial-slider.html',
  styleUrls: ['./testimonial-slider.scss'],
  imports: [CommonModule]
})
export class TestimonialSliderComponent implements OnInit, OnDestroy {
  testimonialDisplay: TestimonialDisplay[] = [
    { image: '/assets/testimonial-img1.jpg', rating: 4, trophies: 15, icons: ['timer', 'moon', 'lightbulb'] },
    { image: '/assets/testimonial-img1.jpg', rating: 5, trophies: 12, icons: ['timer', 'moon', 'lightbulb'] },
    { image: '/assets/testimonial-img1.jpg', rating: 5, trophies: 8, icons: ['timer', 'moon', 'lightbulb'] },
    { image: '/assets/testimonial-img1.jpg', rating: 5, trophies: 7, icons: ['timer', 'moon', 'lightbulb'] },
    { image: '/assets/testimonial-img1.jpg', rating: 4, trophies: 9, icons: ['timer', 'moon', 'lightbulb'] }
  ];

  testimonials: Testimonial[] = [];
  groupSize = 3;
  currentIndex = 0;
  visibleTestimonials: (Testimonial & TestimonialDisplay)[] = [];
  autoplayInterval: any;

  constructor(private i18n: I18nService) {}

  ngOnInit() {
    this.loadTestimonials();
    this.setGroupSize();
    this.updateVisibleTestimonials();
    this.startAutoplay();

    // Listen for language change and reload testimonials
    if (this.i18n.langChanged$) {
      this.i18n.langChanged$.subscribe(() => {
        this.loadTestimonials();
        this.updateVisibleTestimonials();
      });
    }
  }

  loadTestimonials() {
    this.testimonials = this.i18n.t('home.testimonialData') as Testimonial[];
  }

  @HostListener('window:resize')
  onResize() {
    this.setGroupSize();
  }

  setGroupSize() {
    if (window.innerWidth <= 600) {
      this.groupSize = 1;
    } else if (window.innerWidth <= 900) {
      this.groupSize = 2;
    } else {
      this.groupSize = 3;
    }
    this.updateVisibleTestimonials();
  }

  updateVisibleTestimonials() {
    const len = this.testimonials.length;
    this.visibleTestimonials = [];
    for (let i = 0; i < this.groupSize; i++) {
      const idx = (this.currentIndex + i) % len;
      this.visibleTestimonials.push({
        ...this.testimonials[idx],
        ...this.testimonialDisplay[idx]
      });
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  goTo(idx: number) {
    this.currentIndex = idx;
    this.updateVisibleTestimonials();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  get starsArray(): any[] {
    return Array(5);
  }
  get testimonialsArray(): any[] {
    return Array(this.testimonials.length);
  }
}