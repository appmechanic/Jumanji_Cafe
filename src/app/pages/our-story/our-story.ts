import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { StorySectionComponent } from '../../shared/story-section/story-section';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { SimpleCardsComponent, SimpleCardType } from '../../shared/simple-cards/simple-cards';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import { CustomerTag } from '../../shared/customer-tag/customer-tag';
import { ImageShowcaseCard } from '../../shared/image-showcase-card/image-showcase-card';
import { InfoStatBar } from '../../shared/info-stat-bar/info-stat-bar';
import { TestimonialCard } from '../../shared/testimonial-card/testimonial-card';
import { CtaSectionComponent } from '../../shared/CTA-Section/CTA-Section';
import { MediaCard } from '../../shared/media-card/media-card';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';


export type StatCardType = {
  iconType: "material" | "bootstrap";
  icon: string;
  title: string;
  text: string;
  borderColor: string;
  iconBgColor: string;
  titleColor: string;
  textColor: string;
  cardBgColor: string;
};

export interface ImageShowcaseCardData {
  imageSrc: string;
  overlay: boolean;
  icon: string;
  title: string;
  titleClass: string;
  text: string;
  textClass: string;
}
export type InfoStatType = {
  icon: string;
  iconClass: string;
  title: string;
  titleColor: string;
  text: string;
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
  tag: string;
  tagClass: string;
  cardClass: string;
}


@Component({
  selector: 'app-about-jumanji',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    StorySectionComponent,
    HeadingSectionComponent,
    SimpleCardsComponent,
    StatCardComponent,
    PrimaryButtonComponent,
    GhostButtonComponent,
    CustomerTag,
    ImageShowcaseCard,
    InfoStatBar,
    TestimonialCard,
    CtaSectionComponent,
    MediaCard
  ],
  templateUrl: './our-story.html',
  styleUrls: ['./our-story.scss']
})
export class OurStory implements OnInit, OnDestroy {
  OurStory: any = {};
  langSub!: Subscription;

  storyStats = [
    {
      iconType: 'bootstrap',
      icon: 'bi-clock',
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-white shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-buildings',
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-white shadow-sm'
    }
  ];
  missionCard = [
    {
      titleColor: 'text-primary',
      icon: 'bi-compass-fill',
      iconColor: 'bg-primary text-white',
      badges: [
        { color: 'bg-primary2' },
        { color: 'bg-primary2' },
        { color: 'bg-primary2' }
      ],
      badgeColor: 'bg-purple-light text-purple',
      bgColor: 'bg-white shadow-sm'
    },
    {
      titleColor: 'text-secondary',
      icon: 'bi-eye-fill',
      iconColor: 'bg-secondary text-white',
      badges: [
        { color: 'bg-secondary2' },
        { color: 'bg-secondary2' },
        { color: 'bg-secondary2' }
      ],
      badgeColor: 'bg-purple-light text-purple',
      bgColor: 'bg-white shadow-sm'
    }
  ];
  missionStats = [
    {
      iconType: 'material',
      icon: 'videogame_asset',
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-white shadow-sm'
    },
    {
      iconType: 'material',
      icon: 'today',
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-white shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-people-fill',
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-white shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-suit-heart-fill',
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-white shadow-sm'
    }
  ];
  highlightCards = [
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'videogame_asset text-white bg-primary',
      titleClass: 'fw-bold text-white fs-4',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'local_cafe text-white bg-secondary',
      titleClass: 'fw-bold text-white fs-4',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'bi-people-fill text-white bg-primary',
      titleClass: 'fw-bold text-white fs-4',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'bi-person-heart text-white bg-secondary',
      titleClass: 'fw-bold text-white fs-4',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'today text-white bg-primary',
      titleClass: 'fw-bold text-white fs-4',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'wifi text-white bg-secondary',
      titleClass: 'fw-bold text-white fs-4',
      textClass: 'text-white'
    }
  ];
  highlightInfoStats = [
    {
      icon: 'bi-clock',
      iconClass: 'text-white bg-primary',
      titleColor: 'text-primary',
    },
    {
      icon: 'bi-people',
      iconClass: 'text-white bg-secondary',
      titleColor: 'text-secondary',
    }
  ];
  testimonials = [
    {
      showInvertedCommas: true,
      rating: 4.2,
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: true,
      icon: 'videogame_asset',
      tagClass: 'bg-primary2',
      cardClass: 'bg-light'
    },
    {
      showInvertedCommas: true,
      rating: 4,
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: true,
      icon: 'videogame_asset',
      tagClass: 'bg-primary2',
      cardClass: 'bg-light'
    },
    {
      showInvertedCommas: true,
      rating: 5,
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: false,
      icon: 'videogame_asset',
      tagClass: 'bg-primary2',
      cardClass: 'bg-light'
    }
  ];
  communityInfoStats = [
    {
      icon: 'bi-star-fill',
      iconClass: 'text-success bg-success-subtle',
      titleColor: 'text-success',
    },
    {
      icon: 'bi-chat-fill',
      iconClass: 'text-white bg-primary',
      titleColor: 'text-primary',
    },
    {
      icon: 'bi-chat-fill',
      iconClass: 'text-info bg-info-subtle',
      titleColor: 'text-info',
    }
  ];
  CtaStats = [
    {
      iconType: 'bootstrap',
      icon: 'bi-geo-alt',
      borderColor: 'rgb(255 255 255 / 20%)',
      iconBgColor: 'bg-primary text-white',
      titleColor: 'text-white',
      textColor: 'text-white',
      cardBgColor: 'bg-white2 shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-clock',
      borderColor: 'rgb(255 255 255 / 20%)',
      iconBgColor: 'bg-secondary text-white',
      titleColor: 'text-white',
      textColor: 'text-white',
      cardBgColor: 'bg-white2 shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-telephone',
      borderColor: 'rgb(255 255 255 / 20%)',
      iconBgColor: 'bg-success text-white',
      titleColor: 'text-white',
      textColor: 'text-white',
      cardBgColor: 'bg-white2 shadow-sm'
    }
  ];
  mediaStats = [
    {
      iconType: 'material',
      icon: '',
      title: '25+',
      text: 'Experience',
      borderColor: 'border-none',
      iconBgColor: '',
      titleColor: 'text-info',
      textColor: '',
      cardBgColor: 'bg-info-subtle shadow-sm'
    },
    {
      iconType: 'material',
      icon: '',
      title: '500k+',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: '',
      titleColor: 'text-success',
      textColor: '',
      cardBgColor: 'bg-success-subtle shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: '',
      title: '50k +',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: '',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-primary5 shadow-sm'
    },
    {
      iconType: 'bootstrap',
      icon: '',
      title: '5★',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: '',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-secondary5 shadow-sm'
    }
  ];
  mediaCards = [
    {
      badgeClass: 'bg-primary2',
      buttonClass: 'bg-primary text-white',
      buttonIcon: 'open_in_new',
      iconBgClass: 'bg-primary text-white',
      icon: 'bi-file-earmark-text',
      iconDotClass: 'bg-primary2',
      image: 'assets/media-img1.jpg',
    },
    {
      badgeClass: 'bg-secondary2',
      buttonClass: 'bg-primary text-white',
      buttonIcon: 'open_in_new',
      iconBgClass: 'bg-secondary text-white',
      icon: 'bi-tv',
      iconDotClass: 'bg-secondary2',
      image: 'assets/media-img1.jpg',
    },
    {
      badgeClass: 'bg-primary2',
      buttonClass: 'bg-primary text-white',
      buttonIcon: 'open_in_new',
      iconBgClass: 'bg-primary text-white',
      icon: 'bi-file-earmark-text',
      iconDotClass: 'bg-primary2',
      image: 'assets/media-img1.jpg',
    },
    {
      badgeClass: 'bg-primary2',
      buttonClass: 'bg-primary text-white',
      buttonIcon: 'open_in_new',
      iconBgClass: 'bg-primary text-white',
      icon: 'bi-file-earmark-text',
      iconDotClass: 'bg-primary2',
      image: 'assets/media-img1.jpg',
    },
    {
      badgeClass: 'bg-secondary2',
      buttonClass: 'bg-primary text-white',
      buttonIcon: 'open_in_new',
      iconBgClass: 'bg-secondary text-white',
      icon: 'bi-tv',
      iconDotClass: 'bg-secondary2',
      image: 'assets/media-img1.jpg',
    },
    {
      badgeClass: 'bg-primary2',
      buttonClass: 'bg-primary text-white',
      buttonIcon: 'open_in_new',
      iconBgClass: 'bg-primary text-white',
      icon: 'bi-file-earmark-text',
      iconDotClass: 'bg-primary2',
      image: 'assets/media-img1.jpg',
    }
  ];
  constructor(private i18n: I18nService) { }

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
    this.OurStory = this.i18n.t('about');
  }
  onLanguageChanged() {
    this.loadTranslations();
  }
  getstoryStats(): any[] {
    const stats = this.i18n.t('about.story.storyStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.storyStats[idx]
    }));
  }
  getmissionStats(): any[] {
    const stats = this.i18n.t('about.mission.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.missionStats[idx]
    }));
  }
  getmissionCard(): any[] {
    const cards = this.i18n.t('about.mission.cards') as any[];
    return cards.map((card: any, idx: number) => {
      const configBadges = this.missionCard[idx].badges;
      const badgeColor = this.missionCard[idx].badgeColor;
      const mergedBadges = card.badges.map((badge: any, bIdx: number) => ({
        label: badge.label,
        color: configBadges[bIdx]?.color || '',
      }));
      return {
        title: card.title,
        description: card.description,
        ...this.missionCard[idx],
        badges: mergedBadges,
        badgeColor
      };
    });
  }
  gethighlightCards(): any[] {
    const cards = this.i18n.t('about.highlights.cards') as any[];
    return cards.map((card: any, idx: number) => ({
      ...card,
      ...this.highlightCards[idx]
    }));
  }
  gethighlightInfoStats(): any[] {
    const stats = this.i18n.t('about.highlights.infoStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.highlightInfoStats[idx]
    }));
  }
  gettestimonials(): any[] {
    const testimonials = this.i18n.t('about.community.testimonials') as any[];
    return testimonials.map((testimonial: any, idx: number) => ({
      ...testimonial,
      ...this.testimonials[idx]
    }));
  }
  getcommunityInfoStats(): any[] {
    const stats = this.i18n.t('about.community.infoStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.communityInfoStats[idx]
    }));
  }
    getmediaCards(): any[] {
    const cards = this.i18n.t('about.media.cards') as any[];
    return cards.map((card: any, idx: number) => ({
      ...card,
      ...this.mediaCards[idx]
    }));
  }
  getmediaStats(): any[] {
    const stats = this.i18n.t('about.media.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.mediaStats[idx]
    }));
  }
  getCtaStats(): any[] {
    const stats = this.i18n.t('about.experience.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.CtaStats[idx]
    }));
  }

  getExperienceTitleParts(): any[] {
    const titleParts = this.i18n.t('about.experience.titleParts') as { text: string }[];
    return [
      { text: titleParts[0]?.text || '', class: '', breakLine: false },
      { text: titleParts[1]?.text || '', class: 'text-white', breakLine: true },
      { text: titleParts[2]?.text || '', class: 'gradient-text', breakLine: false }
    ];
  }

  getExperienceSubtitleParts(): any[] {
    const subtitleParts = this.i18n.t('about.experience.subtitleParts') as { text: string }[];
    return [
      { text: subtitleParts[0]?.text || '', class: 'text-white fw-medium' },
      { text: subtitleParts[1]?.text || '', class: 'text-secondary' },
      { text: subtitleParts[2]?.text || '', class: 'text-white' }
    ];
  }
}