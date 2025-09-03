import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';
import { CtaSectionComponent } from '../../shared/CTA-Section/CTA-Section';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import { TestimonialCard } from '../../shared/testimonial-card/testimonial-card';
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
@Component({
  selector: 'app-b2b-services',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    StatCardComponent,
    ShowcaseCardComponent,
    CtaSectionComponent,
    PrimaryButtonComponent,
    TestimonialCard,
    GhostButtonComponent
  ],
  templateUrl: './b2b-services.html',
  styleUrls: ['./b2b-services.scss']
})
export class B2BServices implements OnInit, OnDestroy {
  b2b: any = {};
  langSub?: Subscription;

  heroStats = [
    {
      iconType: "bootstrap",
      icon: "bi-calendar-check-fill gradient-text",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-primary5 shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-buildings-fill gradient-text",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary5 shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-star-fill gradient-text",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-primary5 shadow-sm",
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill gradient-text",
      textColor: "text-color2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary5 shadow-sm",
    }
  ];

  businessServices  = [
    {
      imageSrc: '/assets/business-services-img1.jpg',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRightColor: 'gradient-bg',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRightColor: 'gradient-bg',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRightColor: 'gradient-bg',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRightColor: 'gradient-bg',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
      attending: 0,
      capacity: 0,
      listItems: [
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' },
        { icon: 'check' }
      ]
    }
  ];
  testimonials = [
    {
      showInvertedCommas: true,
      rating: 4.2,
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: true,
      icon: 'videogame_asset',
      cardClass: 'bg-light'
    },
    {
      showInvertedCommas: true,
      rating: 4,
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: true,
      icon: 'videogame_asset',
      cardClass: 'bg-light'
    },
    {
      showInvertedCommas: true,
      rating: 5,
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: false,
      icon: 'videogame_asset',
      cardClass: 'bg-light'
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

  loadTranslations() {
    this.b2b = this.i18n.t('b2b');
  }

  onLanguageChanged() {
    this.loadTranslations();
  }

  getheroStats(): any[] {
    const stats = this.i18n.t('b2b.hero.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.heroStats[idx]
    }));
  }
  getbusinessServices(): any[] {
    const cards = this.i18n.t('b2b.services.cards') as any[];
    return cards.map((card: any, idx: number) => {
      const patchedListItems = card.listItems.map((item: any, itemIdx: number) => ({
        ...item,
        icon: this.businessServices[idx].listItems[itemIdx]?.icon || ''
      }));
      return {
        ...card,
        ...this.businessServices[idx],
        listItems: patchedListItems
      };
    });
  }
  gettestimonials(): any[] {
    const testimonials = this.i18n.t('b2b.client.testimonials') as any[];
    return testimonials.map((testimonial: any, idx: number) => ({
      ...testimonial,
      ...this.testimonials[idx]
    }));
  }
}