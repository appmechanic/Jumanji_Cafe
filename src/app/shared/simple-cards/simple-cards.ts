import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SimpleCardBadgeType = {
  label: string;
  color: string;
};

export type SimpleCardType = {
  title: string;
  description: string;
  badges?: SimpleCardBadgeType[]; 
  titleColor?: string;
  bgColor?: string;
  badgeColor?: string;
  iconColor?: string;
  icon?: string;
};

@Component({
  selector: 'app-simple-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-cards.html',
  styleUrls: ['./simple-cards.scss']
})
export class SimpleCardsComponent {
  @Input() cards: SimpleCardType[] = [];

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}