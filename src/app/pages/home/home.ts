import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { StorySectionComponent } from '../../shared/story-section/story-section';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { Image360ViewerComponent } from '../../shared/image-360-viewer/image-360-viewer';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';
import { SliderComponent } from '../../shared/slider/slider';
import { FilterComponent, FilterConfig } from '../../shared/filter-tab/filter-tab';
import { CtaSectionComponent } from '../../shared/CTA-Section/CTA-Section';
import { BgGradientComponent } from '../../shared/bg-gradient/bg-gradient';
import { CommonModule } from '@angular/common';

export type StatCardType = {
  iconType: "material" | "bootstrap";
  icon: string;
  title: string;
  text: string;
  textColor: string;
  borderColor: string;
  iconBgColor: string;
  titleColor: string;
  subtitle: string;
  subtitleColor: string;
  cardBgColor:string;
  titleicon: string;
};

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
    FilterComponent,
    CtaSectionComponent,
    BgGradientComponent,
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
      titleicon: "",
      title: "200+",
      text: "Board Games",
      textColor: "text-color2",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor:"bg-white",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "bootstrap",
      icon: "bi-cup-fill",
      title: "50+",
      titleicon: "",
      text: "Specialty Drinks",
      textColor: "text-color2",
      borderColor: "border-secondary",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor:"bg-white",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill",
      titleicon: "",
      title: "Daily",
      text: "Events",
      textColor: "text-color2",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor:"bg-white",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "material",
      icon: "favorite",
      titleicon: "",
      title: "5★",
      text: "Experience",
      textColor: "text-color2",
      borderColor: "border-secondary",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor:"bg-white",
      subtitle: "",
      subtitleColor: ""
    }
  ];
  AdventureStats: StatCardType[] = [
    {
      iconType: "bootstrap",
      icon: "bi bi-fork-knife",
      titleicon: "",
      title: "",
      text: "Discover new flavors",
      textColor: "text-white2",
      borderColor: "",
      iconBgColor: "bg-primary4",
      titleColor: "",
      cardBgColor:"bg-semantic",
      subtitle: "Board Games",
      subtitleColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi bi-search",
      titleicon: "",
      title: "",
      text: "Find the perfect game for your next night",
      textColor: "text-white2",
      borderColor: "",
      iconBgColor: "bg-primary4",
      titleColor: "",
      cardBgColor:"bg-semantic",
      subtitle: "Game Hunt",
      subtitleColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi bi-calendar-minus",
      titleicon: "",
      title: "",
      text: "Join the community",
      textColor: "text-white2",
      borderColor: "",
      iconBgColor: "bg-primary4",
      titleColor: "",
      cardBgColor:"bg-semantic",
      subtitle: "Epic Events",
      subtitleColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi bi-compass",
      titleicon: "",
      title: "",
      text: "Our Story",
      textColor: "text-white2",
      borderColor: "",
      iconBgColor: "bg-primary4",
      titleColor: "",
      cardBgColor:"bg-semantic",
      subtitle: "Learn about us",
      subtitleColor: "text-white2"
    }
  ];
  storyStats: StatCardType[] = [
    {
      iconType: 'material',
      icon: 'favorite',
      titleicon: 'favorite',
      title: '5',
      text: 'Experience',
      textColor: "text-color2",
      borderColor: '',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      cardBgColor: 'bg-white',
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-star-fill',
      titleicon: '',
      title: 'Top-notch',
      text: 'Quality',
      textColor: "text-color2",
      borderColor: '',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      cardBgColor: 'bg-white',
      subtitle: "",
      subtitleColor: ""
    }
  ];
  PlayStats: StatCardType[] = [
    {
      iconType: 'material',
      icon: 'favorite',
      titleicon: 'all_inclusive',
      title: '',
      text: '',
      textColor: "text-color2",
      borderColor: '',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      cardBgColor: 'bg-white',
      subtitle: 'Memories Made',
      subtitleColor: 'text-color2'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-controller',
      titleicon: '',
      title: '200+',
      text: '',
      textColor: "text-color2",
      borderColor: '',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      cardBgColor: 'bg-white',
      subtitle: 'Epic Games',
      subtitleColor: 'text-color2'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-people-fill',
      titleicon: '',
      title: '24/7',
      text: '',
      textColor: "text-color2",
      borderColor: '',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      cardBgColor: 'bg-white',
      subtitle: 'Fun Ready',
      subtitleColor: 'text-color2'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-star-fill',
      titleicon: 'bi-star-fill',
      title: '5',
      text: '',
      textColor: "text-color2",
      borderColor: '',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      cardBgColor: 'bg-white',
      subtitle: 'Adventure',
      subtitleColor: 'text-color2'
    }
  ];
  featuredGames: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/cafe-game-img1.jpg',
      category: 'Medium',
      categoryColor: 'bg-secondary5 text-secondary',
      categoryIcon: '',
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
      showDetailIcon: true,
      detailIcon: 'bi-cart',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-game-img1.jpg',
      category: 'Easy',
      categoryIcon: '',
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
      showDetailIcon: true,
      detailIcon: 'bi-cart',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-game-img1.jpg',
      category: 'Hard',
      categoryIcon: '',
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
      showDetailIcon: true,
      detailIcon: 'bi-cart',
      attending: 0,
      capacity: 0
    },
  ];
  cafeMenu: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Jumanji Special',
      categoryIcon: '',
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
      showDetailIcon: false,
      detailIcon: '',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Medium',
      categoryIcon: '',
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
      showDetailIcon: false,
      detailIcon: '',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Medium',
      categoryIcon: '',
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
      showDetailIcon: false,
      detailIcon: '',
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: 'Medium',
      categoryIcon: '',
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
      showDetailIcon: false,
      detailIcon: '',
      attending: 0,
      capacity: 0
    }
  ];
  upcomingEvents: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      category: 'Tournament',
      categoryIcon: '',
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
      showDetailIcon: true,
      detailIcon: 'share',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: ''
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      category: 'Workshop',
      categoryIcon: '',
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
      showDetailIcon: true,
      detailIcon: 'share',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: ''
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      category: 'Family Night',
      categoryIcon: '',
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
      showDetailIcon: true,
      detailIcon: 'share',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: ''
    }
  ];
  businessServices: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      title: 'Business Strategy',
      subtitle: 'Expert guidance for your business growth',
      buttonText: 'Book Now',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      detailIcon: '',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: '',
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check', content: 'Custom Game Selection' },
        { icon: 'check', content: 'Professional Facilitation' },
        { icon: 'check', content: 'Team Challenges' },
        { icon: 'check', content: 'Performance Analytics' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'bi bi-easel2',
      categoryColor: 'bg-white text-primary',
      title: 'Event Hosting',
      subtitle: 'Complete event management for corporate gatherings and special celebrations',
      buttonText: 'Get Started',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      detailIcon: '',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: '',
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check', content: 'Strategic Thinking' },
        { icon: 'check', content: 'Leadership Skills' },
        { icon: 'check', content: 'Communication Training' },
        { icon: 'check', content: 'Certified Instructors' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'bi bi-calendar-event',
      categoryColor: 'bg-white text-primary',
      title: 'Website Development',
      subtitle: 'Custom website solutions for your business',
      buttonText: 'Learn More',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      detailIcon: '',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: '',
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check', content: 'Full Event Planning' },
        { icon: 'check', content: 'Custom Decorations' },
        { icon: 'check', content: 'Professional Staff' },
        { icon: 'check', content: 'Entertainment Coordination' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'bi bi-fork-knife',
      categoryColor: 'bg-white text-primary',
      title: 'Catering',
      subtitle: 'Premium food and beverage service tailored to your corporate event needs',
      buttonText: 'Learn More',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      detailIcon: '',
      players: '',
      duration: '',
      tags: [],
      tagColor: '',
      gameCategory: '',
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check', content: 'Gourmet Menu Options' },
        { icon: 'check', content: 'Coffee Bar Service' },
        { icon: 'check', content: 'Dietary Accommodations' },
        { icon: 'check', content: 'Professional Presentation' }
      ]
    }
  ];
  ngOnInit() {
    this.filteredGames = [...this.featuredGames];
  }
  
  onGamesFilteredDataChange(filteredData: ShowcaseCardType[]): void {
    this.filteredGames = filteredData;
  }
}