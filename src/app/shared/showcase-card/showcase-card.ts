import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface for list items
export interface ListItem {
  icon: string;        
  iconType?: 'bootstrap' | 'material';  
  content: string;    
}

@Component({
  selector: 'app-showcase-card',
  standalone: true,
  templateUrl: './showcase-card.html',
  styleUrls: ['./showcase-card.scss'],
  imports: [CommonModule]
})
export class ShowcaseCardComponent {
  @Input() cardBgColor: string = '';
  @Input() imageSrc: string = '';
  @Input() category: string = '';
  @Input() categoryColor: string = '';
  @Input() categoryIcon: string = ''; 
  @Input() badgeRight: string = '';
  @Input() badgeRightColor: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() price: string = '';
  @Input() priceColor: string = '';
  @Input() tags: string[] = [];
  @Input() tagColor: string = '';
  @Input() players: string = '';
  @Input() playersClass: string = '';
  @Input() duration: string = '';
  @Input() durationClass: string = '';
  @Input() progress: number = 0;
  @Input() progressLabel: string = '';
  @Input() progressColor: string = '';
  @Input() buttonText: string = '';
  @Input() buttonColor: string = '';
  @Input() showDetailIcon: boolean = false;
  @Input() starColor: string = '';
  @Input() starCount: number = 0;
  @Input() gameCategory: string = '';
  @Input() detailIcon: string = '';
  @Input() eventDate: string = '';
  @Input() eventTime: string = '';
  @Input() attending: number = 0;
  @Input() capacity: number = 0;
  @Input() showOverlay: boolean = false;
  @Input() listItems: ListItem[] = []; 

  get progressPercent(): number {
    return this.capacity > 0 ? Math.round((this.attending / this.capacity) * 100) : 0;
  }

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }

}