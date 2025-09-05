import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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
  imports: [CommonModule, ProductDetailComponent]
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
  @Input() detailIcon: string = '';
  @Input() eventDate: string = '';
  @Input() eventTime: string = '';
  @Input() attending: number = 0;
  @Input() capacity: number = 0;
  @Input() listItems: ListItem[] = [];
  @Input() attendingLabel: string = 'attending';
  @Input() fullLabel: string = 'full';
  @Input() age: number = 0;
  @Input() ageClass: string = '';
  @Input() gameType: string = '';
  @Input() gameTypeClass: string = '';
  @Input() showOverlay: boolean = false;
  
  @Input() productDetail: boolean = false;
  @Input() productId: string = '';
  @Input() productData: any = {};
  
  @Output() cardClick = new EventEmitter<any>();

  showProductModal: boolean = false;

  get progressPercent(): number {
    return this.capacity > 0 ? Math.round((this.attending / this.capacity) * 100) : 0;
  }

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }

  onCardClick() {
    if (this.productDetail) {
      this.showProductModal = true;
      this.cardClick.emit({ productId: this.productId });
    }
  }

  closeProductModal() {
    this.showProductModal = false;
  }
}