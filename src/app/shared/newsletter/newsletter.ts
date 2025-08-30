import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type NewsletterBelowItem = {
  icon: string;
  iconColor?: string;
  text: string;
};

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.html',
  styleUrls: ['./newsletter.scss']
})
export class NewsletterComponent {
  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() fieldPlaceholder: string = '';
  @Input() buttonIcon: string = '';
  @Input() buttonName: string = '';
  @Input() titleColor: string = '';
  @Input() subtitleColor: string = '';
  @Input() belowItems: NewsletterBelowItem[] = [];
}
