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
  gameFilterConfig: FilterConfig = {
    property: 'tags',
    includeAll: true,
    allLabel: ''
  };
  featuredGames: any[] = [];
  cafeMenu: any[] = [];
  sliderVisibleCount: number = 3;
  homeText: any = {};
  langSub!: Subscription;

  heroStats = [
    {
      iconType: "material",
      icon: "sports_esports",
      textColor: "text-color2",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm"
    },
    {
      iconType: "bootstrap",
      icon: "bi-cup-fill",
      textColor: "text-color2",
      borderColor: "border-secondary",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm"
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill",
      textColor: "text-color2",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm"
    },
    {
      iconType: "material",
      icon: "favorite",
      textColor: "text-color2",
      borderColor: "border-secondary",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm"
    }
  ];

  storyStats = [
    {
      iconType: "material",
      icon: "favorite",
      titleicon: "favorite",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "bootstrap",
      icon: "bi-star-fill",
      titleicon: "",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm",
      subtitle: "",
      subtitleColor: ""
    }
  ];

  cafeMenuStats = [
    {
      imageSrc: "/assets/cafe-menu-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-primary3",
      priceColor: "bg-secondary2",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-menu-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-secondary4",
      priceColor: "bg-secondary2",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-menu-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-primary3",
      starColor: "bg-secondary text-white",
      priceColor: "bg-secondary2",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-menu-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-primary3",
      starColor: "bg-secondary text-white",
      priceColor: "bg-secondary2",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      attending: 0,
      capacity: 0
    }
  ];

  featuredGameStats = [
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-secondary",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-success",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-danger",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    }
  ];

  upcomingEventStats = [
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-danger text-white",
      badgeRightColor: "bg-light text-dark",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 24,
      capacity: 32,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: ""
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-success text-white",
      badgeRightColor: "bg-warning text-dark",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 12,
      capacity: 20,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: ""
    },
    {
      imageSrc: "/assets/cafe-event-img1.jpg",
      categoryIcon: "",
      categoryColor: "bg-primary text-white",
      badgeRightColor: "",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "share",
      attending: 30,
      capacity: 40,
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: ""
    }
  ];

  businessServicesStats = [
    {
      imageSrc: "/assets/business-services-img1.jpg",
      category: "",
      categoryIcon: "groups",
      categoryColor: "bg-white text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: "check" },
        { icon: "check" },
        { icon: "check" },
        { icon: "check" }
      ]
    },
    {
      imageSrc: "/assets/business-services-img1.jpg",
      category: "",
      categoryIcon: "bi bi-easel2",
      categoryColor: "bg-white text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: "check" },
        { icon: "check" },
        { icon: "check" },
        { icon: "check" }
      ]
    },
    {
      imageSrc: "/assets/business-services-img1.jpg",
      category: "",
      categoryIcon: "bi bi-calendar-event",
      categoryColor: "bg-white text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: "check" },
        { icon: "check" },
        { icon: "check" },
        { icon: "check" }
      ]
    },
    {
      imageSrc: "/assets/business-services-img1.jpg",
      category: "",
      categoryIcon: "bi bi-fork-knife",
      categoryColor: "bg-white text-primary",
      buttonColor: "bg-primary text-white",
      showDetailIcon: false,
      detailIcon: "",
      players: "",
      duration: "",
      tags: [],
      tagColor: "",
      gameCategory: "",
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: "check" },
        { icon: "check" },
        { icon: "check" },
        { icon: "check" }
      ]
    }
  ];

  adventureStats = [
    {
      iconType: "bootstrap",
      icon: "bi bi-fork-knife",
      titleicon: "",
      titleColor: "",
      cardBgColor: "bg-semantic shadow-sm",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary4",
      subtitleColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi bi-search",
      titleicon: "",
      titleColor: "",
      cardBgColor: "bg-semantic",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary4",
      subtitleColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi bi-calendar-minus",
      titleicon: "",
      titleColor: "",
      cardBgColor: "bg-semantic",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary4",
      subtitleColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi bi-compass",
      titleicon: "",
      titleColor: "",
      cardBgColor: "bg-semantic",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary4",
      subtitleColor: "text-white2"
    }
  ];

  readyToPlayStats = [
    {
      iconType: "material",
      icon: "favorite",
      titleicon: "all_inclusive",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm"
    },
    {
      iconType: "bootstrap",
      icon: "bi-controller",
      titleicon: "",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm"
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill",
      titleicon: "",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm"
    },
    {
      iconType: "bootstrap",
      icon: "bi-star-fill",
      titleicon: "bi-star-fill",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm"
    }
  ];

  constructor(private i18n: I18nService) {}

  ngOnInit() {
    this.updateSliderVisibleCount();
    this.loadTranslations();
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
      this.sliderVisibleCount = 1;
    } else if (width < 992) {
      this.sliderVisibleCount = 2;
    } else {
      this.sliderVisibleCount = 3;
    }
  }

  onGamesFilteredDataChange(filteredData: ShowcaseCardType[]): void {
    this.featuredGames = filteredData;
  }

  loadTranslations() {
    this.homeText = this.i18n.t('home');
    this.gameFilterConfig.allLabel = this.i18n.getCurrentLang() === 'ar' ? 'الكل' : 'All';
  }

  onLanguageChanged() {
    this.loadTranslations();
  }

  getHeroStats(): any[] {
    const stats = this.i18n.t('home.hero.heroStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.heroStats[idx]
    }));
  }

  getStoryStats(): any[] {
    const stats = this.i18n.t('home.story.storyStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.storyStats[idx]
    }));
  }

  getCafeMenuStats(): any[] {
    const items = this.i18n.t('home.cafe-menu.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.cafeMenuStats[idx]
    }));
  }

  getFeaturedGameStats(): any[] {
    const items = this.i18n.t('home.featured-game.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.featuredGameStats[idx]
    }));
  }

  getUpcomingEventStats(): any[] {
    const items = this.i18n.t('home.upcoming-event.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.upcomingEventStats[idx]
    }));
  }

  getBusinessServicesStats(): any[] {
    const items = this.i18n.t('home.business-services.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.businessServicesStats[idx],
      // Merge listItems content and icon
      listItems: item.listItems.map((li: any, liIdx: number) => ({
        ...li,
        icon: this.businessServicesStats[idx].listItems[liIdx]?.icon || ""
      }))
    }));
  }

  getAdventureStats(): any[] {
    const items = this.i18n.t('home.adventure.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.adventureStats[idx]
    }));
  }

  getReadyToPlayStats(): any[] {
    const items = this.i18n.t('home.ready-to-play.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.readyToPlayStats[idx]
    }));
  }

  getAttendingLabel(): string {
    return this.i18n.getCurrentLang() === 'ar' ? 'حاضر' : 'attending';
  }
  getFullLabel(): string {
    return this.i18n.getCurrentLang() === 'ar' ? 'ممتلئ' : 'full';
  }
}