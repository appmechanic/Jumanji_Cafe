import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
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
import { TestimonialSliderComponent } from "../../shared/testimonial-slider/testimonial-slider";
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';

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
  TestimonialSliderComponent
],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit, OnDestroy {
  selectedIndex = 0;
  
  // Game filter configuration - specifically filters by tags
  gameFilterConfig: FilterConfig = {
    property: 'tags',
    includeAll: true,
    allLabel: ''
  };
  
  // Filtered games collection
  featuredGames: any[] = []
  cafeMenu: any[] = [];
  AdventureStats: StatCardType[] = [
    {
      iconType: "bootstrap",
      icon: "bi bi-fork-knife",
      titleicon: "",
      title: "",
      text: "Discover new flavors",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary4",
      titleColor: "",
      cardBgColor:"bg-semantic shadow-sm",
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
      borderColor: "border-none",
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
      borderColor: "border-none",
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
      borderColor: "border-none",
      iconBgColor: "bg-primary4",
      titleColor: "",
      cardBgColor:"bg-semantic ",
      subtitle: "Learn about us",
      subtitleColor: "text-white2"
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
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      cardBgColor: 'bg-white shadow-sm',
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
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      cardBgColor: 'bg-white shadow-sm',
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
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      cardBgColor: 'bg-white shadow-sm',
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
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary',
      titleColor: 'text-secondary',
      cardBgColor: 'bg-white shadow-sm',
      subtitle: 'Adventure',
      subtitleColor: 'text-color2'
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

  sliderVisibleCount: number = 3;
  homeText: any = {};
  langSub!: Subscription;
  heroStats: any;

  constructor(private i18n: I18nService) {}
  
  
  ngOnInit() {
    this.featuredGames = this.featuredGames;
    this.updateSliderVisibleCount();
    this.loadTranslations();
    // Subscribe to language change
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  updateSliderVisibleCount() {
    const width = window.innerWidth;
    if (width < 576) {
      this.sliderVisibleCount = 1; // mobile
    } else if (width < 992) {
      this.sliderVisibleCount = 2; // tablet
    } else {
      this.sliderVisibleCount = 3; // desktop
    }
  }

  onGamesFilteredDataChange(filteredData: ShowcaseCardType[]): void {
    this.featuredGames = filteredData;
  }

  loadTranslations() {
    this.homeText = this.i18n.t('home');
    this.heroStats = this.homeText.hero?.heroStats;

    // Set allLabel dynamically based on current language
    this.gameFilterConfig.allLabel = this.i18n.t('tags.all') || (this.i18n.getCurrentLang() === 'ar' ? 'الكل' : 'All');
  }

  onLanguageChanged() {
    this.loadTranslations();
  }
}