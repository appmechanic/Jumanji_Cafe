import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';

export type ShowcaseCardType = {
  imageSrc: string;
  category: string;
  categoryColor: string;
  categoryIcon: string;
  title: string;
  subtitle: string;
  players: string;
  duration: string;
  tags: string[];
  tagColor: string;
  gameCategory: string;
  buttonText: string;
  buttonColor: string;
  showDetailIcon: boolean;
  detailIcon: string;
  starCount?: number;
  starColor?: string;
  playersClass?: string;
  durationClass?: string;
  price?: string;
  priceColor?: string;
  badgeRight?: string;
  badgeRightColor?: string;
  eventDate?: string;
  eventTime?: string;
  attending: number;
  capacity: number;
  listItems?: ListItem[]; 
};

@Component({
  selector: 'app-about-jumanji',
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
        categoryIcon: '',
        categoryColor: 'bg-primary text-white',
        title: 'Catan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Build settlements and cities in this classic strategy game',
        players: '',
        duration: '',
        tags: [],
        tagColor: '',
        gameCategory: '',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
        detailIcon: '',
        attending: 0,
        capacity: 0
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Customer Favorite',
        categoryIcon: '',
        categoryColor: 'bg-secondary text-white',
        title: 'Azul',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Create beautiful tile patterns in this elegant strategy game',
        players: '',
        duration: '',
        tags: [],
        tagColor: '',
        gameCategory: '',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
        detailIcon: '',
        attending: 0,
        capacity: 0
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Jumanji Special',
        categoryIcon: '',
        categoryColor: 'bg-primary text-white',
        starColor: 'bg-secondary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
        players: '',
        duration: '',
        tags: [],
        tagColor: '',
        gameCategory: '',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
        detailIcon: '',
        attending: 0,
        capacity: 0
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Sweet Victory',
        categoryIcon: '',
        categoryColor: 'bg-primary text-white',
        starColor: 'bg-secondary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
        players: '',
        duration: '',
        tags: [],
        tagColor: '',
        gameCategory: '',
        buttonText: 'View Details',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
        detailIcon: '',
        attending: 0,
        capacity: 0
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Customer Favorite',
        categoryIcon: '',
        categoryColor: 'bg-secondary text-white',
        title: 'Azul',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Create beautiful tile patterns in this elegant strategy game',
        players: '',
        duration: '',
        tags: [],
        tagColor: '',
        gameCategory: '',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
        detailIcon: '',
        attending: 0,
        capacity: 0
      },
      {
        imageSrc: '/assets/cafe-menu-img1.jpg',
        category: 'Jumanji Special',
        categoryIcon: '',
        categoryColor: 'bg-primary text-white',
        starColor: 'bg-secondary text-white',
        title: 'Wingspan',
        price: '15 SAR',
        priceColor: 'bg-secondary2',
        subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
        players: '',
        duration: '',
        tags: [],
        tagColor: '',
        gameCategory: '',
        buttonText: 'Add to Order',
        buttonColor: 'bg-primary text-white',
        showDetailIcon: false,
        detailIcon: '',
        attending: 0,
        capacity: 0
      }
    ];
}