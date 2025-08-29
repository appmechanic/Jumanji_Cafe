import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { StorySectionComponent } from '../../shared/story-section/story-section';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { SimpleCardsComponent, SimpleCardType } from '../../shared/simple-cards/simple-cards';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import {CustomerTag} from '../../shared/customer-tag/customer-tag'; 

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

@Component({
  selector: 'app-our-story',
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
    CustomerTag
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
      textColor:'',
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
      textColor:'',
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
      textColor:'',
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
      textColor:'',
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
      textColor:'',
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
      textColor:'',
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
}