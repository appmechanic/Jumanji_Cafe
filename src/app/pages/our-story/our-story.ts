import { Component } from '@angular/core';
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
import {InfoStatBar} from '../../shared/info-stat-bar/info-stat-bar';
import { TestimonialCard } from '../../shared/testimonial-card/testimonial-card';
import { CtaSectionComponent } from '../../shared/CTA-Section/CTA-Section';


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
    CtaSectionComponent
  ],
  templateUrl: './our-story.html',
  styleUrls: ['./our-story.scss']
})
export class OurStory {
  storyStats: StatCardType[] = [
    {
      iconType: 'bootstrap',
      icon: 'bi-clock',
      title: 'Since 2020',
      text: 'Experience',
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-white'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-buildings',
      title: '10k +',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-white'
    }
  ];
  missionStats: StatCardType[] = [
    {
      iconType: 'material',
      icon: 'videogame_asset',
      title: '200+',
      text: 'Experience',
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-white'
    },
    {
      iconType: 'material',
      icon: 'today',
      title: '500+',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-white'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-people-fill',
      title: '50k +',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: 'bg-primary2',
      titleColor: 'text-primary',
      textColor: '',
      cardBgColor: 'bg-white'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-suit-heart-fill',
      title: '5★',
      text: 'Quality',
      borderColor: 'border-none',
      iconBgColor: 'bg-secondary2',
      titleColor: 'text-secondary',
      textColor: '',
      cardBgColor: 'bg-white'
    }
  ];
  CtaStats: StatCardType[] = [
    {
      iconType: 'bootstrap',
      icon: 'bi-geo-alt',
      title: 'Visit Us',
      text: 'Al Kayyal St, Al Rawdah, Jeddah',
      borderColor: 'rgb(255 255 255 / 20%)',
      iconBgColor: 'bg-primary text-white',
      titleColor: 'text-white',
      textColor: 'text-white',
      cardBgColor: '#FFFFFF1A'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-clock',
      title: 'Open Daily',
      text: '9:00 AM - 12:00 AM',
      borderColor: 'rgb(255 255 255 / 20%)',
      iconBgColor: 'bg-secondary text-white',
      titleColor: 'text-white',
      textColor: 'text-white',
      cardBgColor: '#FFFFFF1A'
    },
    {
      iconType: 'bootstrap',
      icon: 'bi-telephone',
      title: 'Call Us',
      text: '+966 XXX XXX XXX',
      borderColor: 'rgb(255 255 255 / 20%)',
      iconBgColor: 'bg-success text-white',
      titleColor: 'text-white',
      textColor: 'text-white',
      cardBgColor: '#FFFFFF1A'
    }
  ];
  mediaStats: StatCardType[] = [
    {
      iconType: 'material',
      icon: '',
      title: '25+',
      text: 'Experience',
      borderColor: 'border-none',
      iconBgColor: '',
      titleColor: 'text-info',
      textColor: '',
      cardBgColor: 'bg-info-subtle'
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
      cardBgColor: 'bg-success-subtle'
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
      cardBgColor: 'bg-primary5'
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
      cardBgColor: 'bg-secondary5'
    }
  ];
  missionCard: SimpleCardType[] = [
    {
      title: 'Our Mission',
      titleColor: 'text-primary',
      icon: 'bi-compass-fill',
      iconColor: 'bg-primary text-white',
      description: `To create a welcoming space where people of all ages and backgrounds can discover the joy of board games, forge meaningful connections, and build lasting memories over exceptional coffee and delicious treats.
      We believe that every game tells a story, every laugh creates a bond, and every visit should leave you feeling more connected to your community and yourself.`,
      badges: [
        { label: 'Community Building', color: 'bg-primary2' },
        { label: 'Inclusive Environment', color: 'bg-primary2' },
        { label: 'Quality Experience', color: 'bg-primary2' }
      ],
      badgeColor: 'bg-purple-light text-purple',
      bgColor: 'bg-white'
    },
    {
      title: 'Our Vission',
      titleColor: 'text-secondary',
      icon: 'bi-eye-fill',
      iconColor: 'bg-secondary text-white',
      description: `To become the leading board game community hub in Saudi Arabia, inspiring a new generation of gamers and establishing Jeddah as a destination for tabletop entertainment and social connection.
      We envision a future where board game cafés are integral to Saudi communities, fostering creativity, strategic thinking, and social bonds across generations.`,
      badges: [
        { label: 'Innovation Leader', color: 'bg-secondary2' },
        { label: 'Cultural Impact', color: 'bg-secondary2' },
        { label: 'Community Growth', color: 'bg-secondary2' }
      ],
      badgeColor: 'bg-purple-light text-purple',
      bgColor: 'bg-white'
    }
  ];
  highlightCards: ImageShowcaseCardData[] = [
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'videogame_asset text-white bg-primary',
      title: 'Family-Friendly & Inclusive',
      titleClass: 'fw-bold text-white fs-4',
      text: 'Our welcoming environment caters to all ages and backgrounds, making everyone feel at home in our gaming community.',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'local_cafe text-white bg-secondary',
      title: 'Family-Friendly & Inclusive',
      titleClass: 'fw-bold text-white fs-4',
      text: 'Our welcoming environment caters to all ages and backgrounds, making everyone feel at home in our gaming community.',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'bi-people-fill text-white bg-primary',
      title: 'Family-Friendly & Inclusive',
      titleClass: 'fw-bold text-white fs-4',
      text: 'Our welcoming environment caters to all ages and backgrounds, making everyone feel at home in our gaming community.',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'bi-person-heart text-white bg-secondary',
      title: 'Family-Friendly & Inclusive',
      titleClass: 'fw-bold text-white fs-4',
      text: 'Our welcoming environment caters to all ages and backgrounds, making everyone feel at home in our gaming community.',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'today text-white bg-primary',
      title: 'Family-Friendly & Inclusive',
      titleClass: 'fw-bold text-white fs-4',
      text: 'Our welcoming environment caters to all ages and backgrounds, making everyone feel at home in our gaming community.',
      textClass: 'text-white'
    },
    {
      imageSrc: '/assets/cafe-event-img1.jpg',
      overlay: true,
      icon: 'wifi text-white bg-secondary',
      title: 'Family-Friendly & Inclusive',
      titleClass: 'fw-bold text-white fs-4',
      text: 'Our welcoming environment caters to all ages and backgrounds, making everyone feel at home in our gaming community.',
      textClass: 'text-white'
    }
  ];
  highlightStats: InfoStatType[] = [
  {
    icon: 'bi-clock',
    iconClass: 'text-white bg-primary',
    title: 'Open Daily',
    titleColor: 'text-primary',
    text: '9 AM - 12 AM',
  },
  {
    icon: 'bi-people',
    iconClass: 'text-white bg-secondary',
    title: 'All Ages',
    titleColor: 'text-secondary',
    text: 'Family Welcome',
  }
];
communityStats: InfoStatType[] = [
  {
    icon: 'bi-star-fill',
    iconClass: 'text-success bg-success-subtle',
    title: '4.9/5',
    titleColor: 'text-success',
    text: 'Average Rating',
  },
  {
    icon: 'bi-chat-fill',
    iconClass: 'text-white bg-primary',
    title: '500+',
    titleColor: 'text-primary',
    text: 'Happy Reviews',
  },
{
    icon: 'bi-chat-fill',
    iconClass: 'text-info bg-info-subtle',
    title: '85%',
    titleColor: 'text-info',
    text: 'Return Visitors',
  }
];
testimonials: Testimonial[] = [
    {
      quote: '"Jumanji Café has become our family\'s weekend tradition! The staff is incredibly helpful in recommending games, and the atmosphere is perfect for spending quality time together. My kids always ask when we can go back!"',
      showInvertedCommas: true,
      rating: 4.2,
      name: 'Ahmed Al-Rahman',
      role: 'HR Director',
      location: 'Tech Solutions KSA',
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: true,
      icon: 'videogame_asset',
      tag: 'Team Building',
      tagClass: 'bg-primary2',
      cardClass: 'bg-light'
    },
    {
      quote: '"As a strategy game enthusiast, I\'ve finally found my paradise! The collection here is incredible, and I\'ve discovered so many new games. The coffee is excellent too - perfect fuel for those long gaming sessions."',
      showInvertedCommas: true,
      rating: 4,
      name: 'Ahmed Al-Rahman',
      role: 'HR Director',
      location: 'Tech Solutions KSA',
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: true,
      icon: 'videogame_asset',
      tag: 'Team Building',
      tagClass: 'bg-primary2',
      cardClass: 'bg-light'
    },
    {
      quote: '"I brought my team here for a corporate event, and it was amazing! The staff organized everything perfectly, and our team bonding experience was unforgettable. Highly recommended for both personal and business visits."',
      showInvertedCommas: true,
      rating: 5,
      name: 'Sara Al-Mutairi',
      role: '',
      location: 'Jeddah',
      imageSrc: '/assets/testimonial-img1.jpg',
      showCheckIcon: false,
      icon: 'videogame_asset',
      tag: 'Local Favorite',
      tagClass: 'bg-primary2',
      cardClass: 'bg-light'
    }
  ];
}