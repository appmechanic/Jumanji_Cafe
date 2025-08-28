import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

type Testimonial = {
  author: string;
  tag: string;
  qualities: string; // <-- lowercase
  image?: string;
  rating?: number;
  trophies?: number;
  icons?: string[];
};

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './testimonial-slider.html',
  styleUrls: ['./testimonial-slider.scss']
})
export class TestimonialSliderComponent {
  testimonials: Testimonial[] = [
    {
      author: 'Omar bin Khalid',
      tag: 'Puzzle Master',
      qualities: 'Logic Games',
      image: '/assets/testimonial-img1.jpg',
      rating: 4,
      trophies: 15,
      icons: ['timer', 'moon', 'lightbulb'],
    },
    {
      author: 'Ahmed Al-Rashid',
      tag: 'Board Boss',
      qualities: 'Strategy Games',
      image: '/assets/testimonial-img1.jpg',
      rating: 5,
      trophies: 12,
      icons: ['timer', 'moon', 'lightbulb'],
    },
    {
      author: 'Fatima Al-Zahra',
      tag: 'Trivia Queen',
      qualities: 'Quiz Master',
      image: '/assets/testimonial-img1.jpg',
      rating: 5,
      trophies: 8,
      icons: ['timer', 'moon', 'lightbulb'],
    },
    {
      author: 'Fatima',
      tag: 'Quiz Master',
      qualities: 'Trivia Games',
      image: '/assets/testimonial-img1.jpg',
      rating: 5,
      trophies: 7,
      icons: ['timer', 'moon', 'lightbulb'],
    },
    {
      author: 'Omar',
      tag: 'Logic Pro',
      qualities: 'Logic Games',
      image: '/assets/testimonial-img1.jpg',
      rating: 4,
      trophies: 9,
      icons: ['timer', 'moon', 'lightbulb'],
    }
  ];

  groupSize = 3;
  currentIndex = 0;
  visibleTestimonials: Testimonial[] = [];
  autoplayInterval: any;

  constructor() {
    this.setGroupSize();
    window.addEventListener('resize', this.setGroupSize.bind(this));
    this.updateVisibleTestimonials();
    this.startAutoplay();
  }

  setGroupSize() {
    if (window.innerWidth <= 900) {
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
      this.visibleTestimonials.push(this.testimonials[idx]);
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
    window.removeEventListener('resize', this.setGroupSize.bind(this));
    this.stopAutoplay();
  }
}