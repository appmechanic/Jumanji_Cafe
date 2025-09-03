import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../i18n.service'; 

@Component({
  selector: 'app-customer-tag',
  standalone: true,
  templateUrl: './customer-tag.html',
  styleUrls: ['./customer-tag.scss'],
  imports: [CommonModule]
})
export class CustomerTag {
  @Input() rating: number = 5;
  @Input() customerCount: number = 0;
  @Input() customerImages: string[] = [];
  @Input() text1: string = '';
  @Input() text2: string = '';

  get stars(): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];
    let r = this.rating;
    for (let i = 0; i < 5; i++) {
      if (r >= 1) {
        stars.push('full');
      } else if (r >= 0.5) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
      r -= 1;
    }
    return stars;
  }
}
