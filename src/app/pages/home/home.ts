import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { StorySectionComponent } from '../../shared/story-section/story-section';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { Image360ViewerComponent } from '../../shared/image-360-viewer/image-360-viewer';
import { ShowcaseCardComponent } from '../../shared/showcase-card/showcase-card';
import { SliderComponent } from '../../shared/slider/slider';
import { FilterComponent, FilterConfig } from '../../shared/filter-tab/filter-tab';


export type StatCardType = {
  iconType: "material" | "bootstrap";
  icon: string;
  title: string;
  text: string;
  borderColor: string;
  iconBgColor: string;
  titleColor: string;
};

export type ShowcaseCardType = {
  imageSrc: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  players: string;
  duration: string;
  tags: string[];
  tagColor: string;
  gameCategory: string;
  buttonText: string;
  buttonColor: string;
  showCart: boolean;
  detailIcon: string;
  iconType: 'material' | 'bootstrap';
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
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    PrimaryButtonComponent,
    GhostButtonComponent,
    StatCardComponent,
    StorySectionComponent,
    HeadingSectionComponent,
    Image360ViewerComponent,
    ShowcaseCardComponent,
    SliderComponent,
    FilterComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  selectedIndex = 0;
  
  // Game filter configuration - specifically filters by tags
  gameFilterConfig: FilterConfig = {
    property: 'tags',
    includeAll: true,
    allLabel: 'All'
  };
  
  // Filtered games collection
  filteredGames: ShowcaseCardType[] = [];
  
  heroStats: StatCardType[] = [
    {
      iconType: "material",
      icon: "sports_esports",
      title: "200+",
      text: "Board Games",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary"
    },
    {
      iconType: "bootstrap",
      icon: "bi-cup-fill",
      title: "50+",
      text: "Specialty Drinks",
      borderColor: "border-secondary",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary"
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill",
      title: "Daily",
      text: "Events",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary"
    },
    {
      iconType: "material",
      icon: "favorite",
      title: "5★",
      text: "Experience",
      borderColor: "border-secondary",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary"
    }
  ];
  storyStats: StatCardType[] = [
    {
      iconType: 'material',
      icon: 'favorite',
      title: '5★',
      text: 'Experience',
      borderColor: '',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-star-fill',
      title: 'Top-notch',
      text: 'Quality',
      borderColor: '',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary'
    }
  ];
  featuredGames: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/cafe-game-img1.jpg',
      category: 'Medium',
      categoryColor: 'bg-secondary5 text-secondary',
      starCount: 4,
      starColor: 'bg-secondary text-white',
      title: 'Catan',
      subtitle: 'Build settlements and cities in this classic strategy game',
      players: '3-4 Players',
      playersClass: 'text-primary fw-600',
      durationClass: 'text-secondary fw-600',
      duration: '60-90 min',
      tags: ['Family Picks', 'Quick Games'],
      tagColor: 'bg-primary2',
      gameCategory: 'Strategy',
      buttonText: 'View Details',
      buttonColor: 'bg-primary text-white',
      showCart: true,
      detailIcon: 'cart',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-game-img1.jpg',
      category: 'Easy',
      categoryColor: 'bg-secondary5 text-success',
      starCount: 4,
      starColor: 'bg-secondary text-white',
      title: 'Azul',
      subtitle: 'Create beautiful tile patterns in this elegant strategy game',
      players: '3-4 Players',
      playersClass: 'text-primary fw-600',
      durationClass: 'text-secondary fw-600',
      duration: '60-90 min',
      tags: ['Family Picks', 'Top Rated'],
      tagColor: 'bg-primary2',
      gameCategory: 'Strategy',
      buttonText: 'View Details',
      buttonColor: 'bg-primary text-white',
      showCart: true,
      detailIcon: 'cart',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-game-img1.jpg',
      category: 'Hard',
      categoryColor: 'bg-secondary5 text-danger',
      starCount: 4,
      starColor: 'bg-secondary text-white',
      title: 'Wingspan',
      subtitle: 'Attract birds to your wildlife preserves in this engine-building game',
      players: '3-4 Players',
      playersClass: 'text-primary fw-600',
      durationClass: 'text-secondary fw-600',
      duration: '60-90 min',
      tags: ['Top Rated'],
      tagColor: 'bg-primary2',
      gameCategory: 'Strategy',
      buttonText: 'View Details',
      buttonColor: 'bg-primary text-white',
      showCart: true,
      detailIcon: 'cart',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    },
  ];
  cafeMenu: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Jumanji Special',
      categoryColor: 'bg-primary3',
      title: 'Catan',
      price: '15 SAR',
      priceColor: 'bg-secondary2',
      subtitle: 'Build settlements and cities in this classic strategy game',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: '',
      buttonText: 'View Details',
      buttonColor: 'bg-primary text-white',
      showCart: false,
      detailIcon: '',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Medium',
      categoryColor: 'bg-secondary4',
      title: 'Azul',
      price: '15 SAR',
      priceColor: 'bg-secondary2',
      subtitle: 'Create beautiful tile patterns in this elegant strategy game',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: '',
      buttonText: 'View Details',
      buttonColor: 'bg-primary text-white',
      showCart: false,
      detailIcon: '',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Medium',
      categoryColor: 'bg-primary3',
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
      showCart: false,
      detailIcon: '',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Medium',
      categoryColor: 'bg-primary3',
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
      showCart: false,
      detailIcon: '',
      iconType: 'bootstrap',
      attending: 0,
      capacity: 0
    }
  ];
  upcomingEvents: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      category: 'Tournament',
      categoryColor: 'bg-danger text-white',
      badgeRight: 'Free Entry',
      badgeRightColor: 'bg-light text-dark',
      eventDate: 'Dec 15, 2024',
      eventTime: '7:00 PM',
      title: 'Tournament Night: Catan Championship',
      subtitle: 'Join our monthly Catan tournament and compete for amazing prizes!',
      attending: 24,
      capacity: 32,
      buttonText: 'Join Event',
      buttonColor: 'bg-primary text-white',
      showCart: true,
      detailIcon: 'share',
      iconType: 'material',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: ''
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      category: 'Workshop',
      categoryColor: 'bg-success text-white',
      badgeRight: 'Limited Seats',
      badgeRightColor: 'bg-warning text-dark',
      eventDate: 'Dec 20, 2024',
      eventTime: '5:30 PM',
      title: 'Azul Strategy Workshop',
      subtitle: 'Learn advanced Azul strategies from top players.',
      attending: 12,
      capacity: 20,
      buttonText: 'Join Event',
      buttonColor: 'bg-primary text-white',
      showCart: true,
      detailIcon: 'share',
      iconType: 'material',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: ''
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      category: 'Family Night',
      categoryColor: 'bg-primary text-white',
      badgeRight: '',
      badgeRightColor: '',
      eventDate: 'Dec 22, 2024',
      eventTime: '6:00 PM',
      title: 'Family Game Night',
      subtitle: 'Bring your family for a fun-filled evening of games!',
      attending: 30,
      capacity: 40,
      buttonText: 'Join Event',
      buttonColor: 'bg-primary text-white',
      showCart: true,
      detailIcon: 'share',
      iconType: 'material',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: ''
    }
  ];

  ngOnInit() {
    this.filteredGames = [...this.featuredGames];
  }
  
  onGamesFilteredDataChange(filteredData: ShowcaseCardType[]): void {
    this.filteredGames = filteredData;
  }
}