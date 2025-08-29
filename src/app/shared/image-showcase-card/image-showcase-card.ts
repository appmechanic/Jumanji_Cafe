import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-showcase-card',
  standalone: true,
  templateUrl: './image-showcase-card.html',
  styleUrls: ['./image-showcase-card.scss'],
  imports: [CommonModule]
})
export class ImageShowcaseCard {
  @Input() imageSrc: string = '';
  @Input() overlay: boolean = false;

  @Input() icon: string = ''; 
  @Input() title: string = '';
  @Input() titleClass: string = '';
  @Input() text: string = '';
  @Input() textClass: string = '';

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}