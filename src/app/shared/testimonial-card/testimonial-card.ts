import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrls: ['./testimonial-card.scss']
})
export class TestimonialCard {
  @Input() quote: string = '';
  @Input() showInvertedCommas: boolean = false;
  @Input() rating: number = 5;
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() location: string = '';
  @Input() imageSrc: string = '';
  @Input() showCheckIcon: boolean = false;
  @Input() icon: string = ''; 
  @Input() tag: string = '';
  @Input() tagClass: string = '';
  @Input() cardClass: string = '';

    isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }

  public hasRole(): boolean {
    return typeof this.role === 'string' && this.role.trim().length > 0;
  }

}
