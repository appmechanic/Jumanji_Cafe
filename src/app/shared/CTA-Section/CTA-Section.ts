import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  templateUrl: './CTA-Section.html',
  styleUrls: ['./CTA-Section.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CtaSectionComponent {
  @Input() icon: string = '';
  @Input() iconBgClass: string = '';
  @Input() titleStart: string = '';
  @Input() titleHighlight: string = '';
  @Input() titleEnd: string = '';
  @Input() description: string = '';
  @Input() colClass: string = '';

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}