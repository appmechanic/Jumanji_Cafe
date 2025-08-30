import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.html',
  styleUrls: ['./media-card.scss'],
  imports: [CommonModule]
})
export class MediaCard {
  @Input() image?: string;
  @Input() icon?: string;
  @Input() badgeText: string = '';
  @Input() badgeClass: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() date: string = '';
  @Input() buttonText: string = '';
  @Input() buttonClass: string = '';
  @Input() buttonIcon: string = '';
  @Input() cardClass: string = '';
  @Input() iconDotClass: string = '';
  @Input() iconBgClass: string = '';

    isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}
