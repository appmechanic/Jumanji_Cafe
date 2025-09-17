import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.html',
  styleUrls: ['./news-card.scss']
})
export class NewsCardComponent {
  @Input() img: string = '';
  @Input() icon: string = '';
  @Input() iconColor: string = 'bg-primary2 text-white';
  @Input() badgeText: string = '';
  @Input() badgeColor: string = 'bg-warning text-white';
  @Input() postedDate: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() btnText: string = '';
  @Input() btnIcon: string = '';
}