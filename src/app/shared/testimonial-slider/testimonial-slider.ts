import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  templateUrl: './testimonial-slider.html',
  styleUrls: ['./testimonial-slider.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialSliderComponent implements OnInit {
  @Input() testimonials: any[] = [
    {
      image: 'https://i.pravatar.cc/80?img=1',
      name: 'Jane Doe',
      title: 'Board Game Enthusiast',
      role: 'Strategy Master',
      stars: 5,
      reviews: 'Absolutely loved the atmosphere and game selection!'
    },
    {
      image: 'https://i.pravatar.cc/80?img=2',
      name: 'John Smith',
      title: 'Puzzle Pro',
      role: 'Challenge Seeker',
      stars: 4,
      reviews: 'Great place to meet new friends and play games.'
    },
    {
      image: 'https://i.pravatar.cc/80?img=3',
      name: 'Emily Clark',
      title: 'Family Gamer',
      role: 'Fun Lover',
      stars: 5,
      reviews: 'Perfect for family nights and group fun!'
    },
    {
      image: 'https://i.pravatar.cc/80?img=4',
      name: 'Michael Lee',
      title: 'Trivia King',
      role: 'Quiz Champion',
      stars: 5,
      reviews: 'The events are always exciting and well organized.'
    }
  ];
  @Input() visibleCount: number = 3;

  startIndex = 0;
  visibleTestimonials: any[] = [];

  ngOnInit() {
    this.updateVisibleTestimonials();
  }

  updateVisibleTestimonials() {
    this.visibleTestimonials = this.testimonials.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex -= this.visibleCount;
      this.updateVisibleTestimonials();
    }
  }

  next() {
    if (this.startIndex + this.visibleCount < this.testimonials.length) {
      this.startIndex += this.visibleCount;
      this.updateVisibleTestimonials();
    }
  }
}