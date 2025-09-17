import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { PackageCardComponent, PackageListItem } from '../../shared/package-card/package-card';
import { NewsCardComponent } from '../../shared/news-card/news-card';
import { ImageShowcaseCard } from '../../shared/image-showcase-card/image-showcase-card';
import { AdventureUpdatesFormComponent } from '../../shared/adventure-updates-form/adventure-updates-form';
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
  cardBgColor: string;
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
export interface Testimonial {
  quote: string;
  showInvertedCommas: boolean;
  rating: number;
  name: string;
  role: string;
  location?: string;
  imageSrc: string;
  showCheckIcon: boolean;
  icon: string;
  cardClass: string;
}

interface PackageData {
  title: string;
  description: string;
  price: string;
  priceClass?: string;
  currency: string;
  priceSubtext: string;
  listItems: PackageListItem[];
  buttonText: string;
  buttonClass: string;
  isActive: boolean;
  badgeText?: string;
  badgeIcon?: string;
  badgeClass?: string;
}

@Component({
  selector: 'app-b2b-services',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    StatCardComponent,
    ShowcaseCardComponent,
    PrimaryButtonComponent,
    NewsCardComponent,
    ImageShowcaseCard,
    AdventureUpdatesFormComponent
  ],
  templateUrl: './event-news.html',
  styleUrls: ['./event-news.scss']
})
export class EventNews implements OnInit, OnDestroy {
  events: any = {};
  mappedOptionIcons: any[] = [];
  mappedListIcons: any = {};
  langSub?: Subscription;

  heroStats = [
    {
      iconType: "bootstrap",
      icon: "bi-calendar-check-fill text-white",
      textColor: "text-white",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary-opacity shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-buildings-fill text-white",
      textColor: "text-white",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary-opacity shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-star-fill text-white",
      textColor: "text-white",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary-opacity shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill text-white",
      textColor: "text-white",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary-opacity shadow-sm",
    }
  ];

  upcomingEventStats = [
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-danger text-white",
      badgeRightColor: "bg-primary5 text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 24,
      capacity: 32,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-success text-white",
      badgeRightColor: "bg-primary5 text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 12,
      capacity: 20,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-primary text-white",
      badgeRightColor: "bg-primary5 text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 30,
      capacity: 40,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-secondary5 text-secondary",
      badgeRightColor: "bg-primary5 text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 30,
      capacity: 40,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-orange2 text-white",
      badgeRightColor: "bg-primary5 text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 30,
      capacity: 40,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-danger text-white",
      badgeRightColor: "bg-primary5 text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 24,
      capacity: 32,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
    }
  ];

  galleryImgCards = [
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: false,
    }
  ];

  galleryStats = [
    {
      iconType: "bootstrap",
      icon: "bi-calendar-check-fill text-white",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-color",
      cardBgColor: "bg-white shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-buildings-fill text-white",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-color",
      cardBgColor: "bg-white shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-star-fill text-white",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-color",
      cardBgColor: "bg-white shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill text-white",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "gradient-bg",
      titleColor: "text-color",
      cardBgColor: "bg-white shadow-sm",
    }
  ];

  newsCards = [
    {
      img: '../assets/business-services-img1.jpg',
      icon: 'bi-gift',
      iconColor: 'bg-primary2 text-primary',
      badgeColor: 'bg-success text-white',
      btnIcon: 'bi-arrow-down-short'
    },
    {
      img: '../assets/business-services-img1.jpg',
      icon: 'bi-clock',
      iconColor: 'bg-primary2 text-primary',
      badgeColor: 'bg-primary text-white',
      btnIcon: 'bi-arrow-down-short'
    },
    {
      img: '../assets/business-services-img1.jpg',
      icon: 'bi-fork-knife',
      iconColor: 'bg-primary2 text-primary',
      badgeColor: 'bg-danger text-white',
      btnIcon: 'bi-arrow-down-short'
    },
    {
      img: '../assets/business-services-img1.jpg',
      icon: 'bi-star-fill',
      iconColor: 'bg-primary2 text-primary',
      badgeColor: 'bg-info text-white',
      btnIcon: 'bi-arrow-down-short'
    },
    {
      img: '../assets/business-services-img1.jpg',
      icon: 'bi-trophy',
      iconColor: 'bg-primary2 text-primary',
      badgeColor: 'bg-orange2 text-white',
      btnIcon: 'bi-arrow-down-short'
    }
  ];





  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.onLanguageChanged();
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
  interestOptionsIcons = [
    { icon: 'bi-controller bg-primary2' },
    { icon: 'bi-people bg-primary2' },
    { icon: 'bi-easel bg-primary2' },
    { icon: 'bi-box bg-primary2' },
    { icon: 'bi-gift bg-primary2' },
    { icon: 'bi-moon-stars bg-primary2' }
  ];
  listItemsIcons = [
    [
      { icon: 'bi-calendar-check bg-secondary6', text: 'Early event registration' },
      { icon: 'bi-bell bg-secondary6', text: 'New game launch notifications' },
      { icon: 'bi-percent bg-secondary6', text: 'Exclusive member discounts' },
      { icon: 'bi-envelope-paper bg-secondary6', text: 'Tournament invitations' }
    ]
  ]
  loadTranslations() {
  this.events = this.i18n.t('events');
  this.mappedOptionIcons = this.events.adventureUpdatesForm.interestOptions.map((item: any, idx: number) => ({
    ...item,
    ...this.interestOptionsIcons[idx]
  }));
  this.mappedListIcons = this.events.adventureUpdatesForm.listItems.map((item: any, idx: number) => ({
    ...item,
    ...this.listItemsIcons[0][idx]
  }));
}

  onLanguageChanged() {
    this.loadTranslations();
  }

  getheroStats(): any[] {
    const stats = this.i18n.t('events.hero.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.heroStats[idx]
    }));
  }
  getUpcomingEventStats(): any[] {
    const items = this.i18n.t('events.upcoming-event.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.upcomingEventStats[idx]
    }));
  }
  getnewsCards(): any[] {
    const items = this.i18n.t('events.news.cards') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.newsCards[idx]
    }));
  }
  getgalleryStats(): any[] {
    const items = this.i18n.t('events.gallery.stats') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.galleryStats[idx]
    }));
  }


  getFullLabel(): string {
    return this.i18n.getCurrentLang() === 'ar' ? 'ممتلئ' : 'full';
  }
  getAttendingLabel(): string {
    return this.i18n.getCurrentLang() === 'ar' ? 'حاضر' : 'attending';
  }

  get eventCategories(): string[] {
    const events = this.getUpcomingEventStats();
    const categories = events.map(e => e.category).filter(Boolean);
    return ['All', ...Array.from(new Set(categories))];
  }

  get eventTags(): string[] {
    const events = this.getUpcomingEventStats();
    const tags = events.map(e => e.badgeRight).filter(Boolean);
    return ['All', ...Array.from(new Set(tags))];
  }

  // Filtering logic
  selectedCategory: string = 'All';
  selectedTag: string = 'All';

  get filteredEvents() {
    return this.getUpcomingEventStats().filter(event => {
      const categoryMatch = this.selectedCategory === 'All' || event.category === this.selectedCategory;
      const tagMatch = this.selectedTag === 'All' || event.badgeRight === this.selectedTag;
      return categoryMatch && tagMatch;
    });
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  selectTag(tag: string) {
    this.selectedTag = tag;
  }
}