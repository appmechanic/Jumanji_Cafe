import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  templateUrl: './CTA-section.html',
  styleUrls: ['./CTA-section.scss'],
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

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}