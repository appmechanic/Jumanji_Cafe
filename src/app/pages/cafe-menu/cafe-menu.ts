import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';

export type ShowcaseCardType = {
  imageSrc: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonColor: string;
  price?: string;
  priceColor?: string;
  badgeRight?: string;
  showDetailIcon?: boolean;
  badgeRightColor?: string;
};

@Component({
  selector: 'app-cafe-menu',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    ShowcaseCardComponent
  ],
  templateUrl: './cafe-menu.html',
  styleUrls: ['./cafe-menu.scss']
})
export class CafeMenu {
    cafeMenu: ShowcaseCardType[] = [
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Jumanji Special',
        categoryColor: 'bg-primary text-white',
        title: 'Catan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Build settlements and cities in this classic strategy game',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,

      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Customer Favorite',
        categoryColor: 'bg-secondary text-white',
        title: 'Azul',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Create beautiful tile patterns in this elegant strategy game',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Jumanji Special',
        categoryColor: 'bg-primary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Sweet Victory',
        categoryColor: 'bg-primary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Sweet Victory',
        categoryColor: 'bg-primary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Customer Favorite',
        categoryColor: 'bg-secondary text-white',
        title: 'Azul',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Create beautiful tile patterns in this elegant strategy game',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Jumanji Special',
        categoryColor: 'bg-primary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',

        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false
      }
    ];
}