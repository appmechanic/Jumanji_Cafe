import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading-section.html',
  styleUrls: ['./heading-section.scss']
})
export class HeadingSectionComponent {
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';
  @Input() imgLeft: string = '';
  @Input() imgRight: string = '';
  @Input() title: string = '';
  @Input() highlight: string = '';
  @Input() highlightColor: string = 'gradient-text';
  @Input() subtitle: string = '';
  @Input() iconLeftColor: string = '';
  @Input() iconRightColor: string = '';
  @Input() iconLeftType: 'material' | 'bootstrap' = 'bootstrap';
  @Input() iconRightType: 'material' | 'bootstrap' = 'bootstrap';

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}