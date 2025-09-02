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
      titleicon: "",
      title: "Instagram",
      text: "12.5k followers",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-white",
      cardBgColor: "bg-primary3 border-gradient",
      subtitle: "",
      subtitleColor: "",
    },
    {
      iconType: "bootstrap",
      icon: "bi-tiktok",
      title: "TikTok",
      titleicon: "",
      text: "8.2k followers",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-dark-subtle text-dark",
      titleColor: "text-white",
      cardBgColor: "bg-dark border-gradient",
      subtitle: "",
      subtitleColor: "",
    },
    {
      iconType: "bootstrap",
      icon: "bi-youtube",
      titleicon: "",
      title: "YouTube",
      text: "5.1k followers",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-danger-subtle text-danger",
      titleColor: "text-white",
      cardBgColor: "bg-danger border-gradient",
      subtitle: "",
      subtitleColor: "",
    },
    {
      iconType: "bootstrap",
      icon: "bi-facebook",
      titleicon: "",
      title: "Facebook",
      text: "15.8k followers",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-info-subtle text-info",
      titleColor: "text-white",
      cardBgColor: "bg-info border-gradient",
      subtitle: "",
      subtitleColor: "",
    }
  ];
  contactTitle: string = '';
  contactSubtitle: string = '';
  contactForm: any = {};
  mappedFields: any[] = [];
  mappedBelowItems: any[] = [];
  langSub!: Subscription;

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
    this.mappedBelowItems = this.contactForm.belowItems.map((item: any, idx: number) => ({
      ...item,
      ...belowIcons[idx]
    }));
  }
  getHeroStats(): any[] {
    const stats = this.i18n.t('contact.heroStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...this.heroStats[idx],
      title: stat.title,
      text: stat.text
    }));
  }
}