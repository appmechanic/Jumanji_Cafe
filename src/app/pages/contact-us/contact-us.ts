import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { NewsletterComponent } from '../../shared/newsletter/newsletter';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { LocationCard } from '../../shared/location-card/location-card';
import { HoursCard } from '../../shared/hours-card/hours-card';
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

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    StatCardComponent,
    NewsletterComponent,
    ContactForm,
    LocationCard,
    HoursCard
  ],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.scss']
})
export class ContactUs implements OnInit, OnDestroy {
  selectedIndex = 0;
  contact: any = {};
  heroStats = [
    {
      iconType: "material",
      icon: "sports_esports",
      titleicon: "",
      title: "",
      text: "",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-none",
      subtitle: "",
      subtitleColor: "",
    },
    {
      iconType: "bootstrap",
      icon: "bi-cup-fill",
      titleicon: "",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-secondary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-none",
      subtitle: "",
      subtitleColor: "",
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill",
      titleicon: "",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-none",
      subtitle: "",
      subtitleColor: "",
    }
  ];
  AdventureStats = [
    {
      iconType: "bootstrap",
      icon: "bi-instagram",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-white",
      cardBgColor: "bg-primary3 border-gradient",
      textColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi-tiktok",
      borderColor: "border-none",
      iconBgColor: "bg-dark-subtle text-dark",
      titleColor: "text-white",
      cardBgColor: "bg-dark border-gradient",
      textColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi-youtube",
      borderColor: "border-none",
      iconBgColor: "bg-danger-subtle text-danger",
      titleColor: "text-white",
      cardBgColor: "bg-danger border-gradient",
      textColor: "text-white2"
    },
    {
      iconType: "bootstrap",
      icon: "bi-facebook",
      borderColor: "border-none",
      iconBgColor: "bg-info-subtle text-info",
      titleColor: "text-white",
      cardBgColor: "bg-info border-gradient",
      textColor: "text-white2"
    }
  ];
  contactTitle: string = '';
  contactSubtitle: string = '';
  contactForm: any = {};
  locationCard: any = {};
  HoursCard: any = {};
  newsletter: any = {};
  subscribe: any = {};
  mappedFields: any[] = [];
  mappedBelowItems: any[] = [];
  newsletterBelowIcons: any[] = [];
  mappedLocationFields: any[] = [];
  mappedHoursFields: any[] = [];
  mappedNotes: any[] = [];
  langSub!: Subscription;
  public direction: string = 'ltr';
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  loadTranslations() {
    this.contactTitle = this.i18n.t('contact.title');
    this.contactSubtitle = this.i18n.t('contact.subtitle');
    this.contactForm = this.i18n.t('contact.contactForm');
    this.locationCard = this.i18n.t('contact.LocationCard');
    this.HoursCard = this.i18n.t('contact.HoursCard');
    this.newsletter = this.i18n.t('contact.newsletter');
    this.subscribe = this.newsletter.subscribe || {};

    const icons = ['bi-person', 'bi-envelope', 'bi-telephone', 'bi-chat-dots'];
    this.mappedFields = this.contactForm.fields.map((field: any, idx: number) => ({
      ...field,
      icon: icons[idx],
      iconClass: 'text-info'
    }));
    const belowIcons = [
      { icon: 'bi-shield-check', iconClass: 'text-success' },
      { icon: 'bi-clock', iconClass: 'text-info' },
      { icon: 'bi-headset', iconClass: 'text-primary' }
    ];
    const newsletterBelowIcons = [
      { icon: 'bi-shield-check', iconColor: 'text-secondary' },
      { icon: 'bi-calendar-week', iconColor: 'text-info' },
      { icon: 'bi-star-fill', iconColor: 'text-secondary' }
    ];
    this.mappedBelowItems = this.contactForm.belowItems.map((item: any, idx: number) => ({
      ...item,
      ...belowIcons[idx]
    }));
    this.newsletterBelowIcons = (this.subscribe.belowItems || []).map((item: any, idx: number) => ({
      ...item,
      ...newsletterBelowIcons[idx]
    }));
    const locationIcons = [
      { icon: 'bi-geo-alt', iconClass: 'bg-primary2' },
      { icon: 'bi-telephone', iconClass: 'bg-secondary2' },
      { icon: 'bi-envelope', iconClass: 'bg-primary2' }
    ];
    const HoursIcons = [
      { icon: 'bi-brightness-high', iconClass: 'bg-primary2' },
      { icon: 'bi-moon', iconClass: 'bg-primary2' }
    ];
    const mappedNotes = [
      { icon: 'bi-exclamation-circle', iconClass: 'text-orange', title: 'Extended hours during special events', color: 'text-orange' },
      { icon: 'bi-lock', iconClass: 'text-orange', color: 'text-orange' },
      { icon: 'bi-calendar-event', iconClass: 'text-orange', color: 'text-orange' }
    ];

    this.mappedLocationFields = this.locationCard.content.map((field: any, idx: number) => ({
      ...field,
      ...locationIcons[idx]
    }));

    this.mappedHoursFields = this.HoursCard.content.map((field: any, idx: number) => ({
      ...field,
      ...HoursIcons[idx]
    }));
    this.mappedNotes = this.HoursCard.notes.map((note: any, idx: number) => ({
      ...note,
      ...mappedNotes[idx]
    }));
  }

  getHeroStats(): any[] {
    const stats = this.i18n.t('contact.heroStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...this.heroStats[idx],
      title: stat.title,
      text: stat.text
    }));
  };
  getAdventureStats(): any[] {
    const stats = this.i18n.t('contact.newsletter.AdventureStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...this.AdventureStats[idx],
      title: stat.title,
      text: stat.text
    }));
  }
}