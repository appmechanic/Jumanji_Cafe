import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';
import { CtaSectionComponent } from '../../shared/CTA-Section/CTA-Section';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';

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
    GhostButtonComponent
  ],
  templateUrl: './b2b-services.html',
  styleUrls: ['./b2b-services.scss']
})
export class B2BServices {
  heroStats: StatCardType[] = [
    {
      iconType: "bootstrap",
      icon: "bi-calendar-check-fill gradient-text",
      titleicon: "",
      title: "200+",
      text: "Board Games",
      textColor: "text-color2",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-primary5 shadow-sm",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "bootstrap",
      icon: "bi-buildings-fill gradient-text",
      title: "50+",
      titleicon: "",
      text: "Specialty Drinks",
      textColor: "text-color2",
      borderColor: "border-secondary",
      iconBgColor: "bg-primary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary5 shadow-sm",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "bootstrap",
      icon: "bi-star-fill gradient-text",
      titleicon: "",
      title: "Daily",
      text: "Events",
      textColor: "text-color2",
      borderColor: "border-primary",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-primary5 shadow-sm",
      subtitle: "",
      subtitleColor: ""
    },
    {
      iconType: "bootstrap",
      icon: "bi-people-fill gradient-text",
      titleicon: "",
      title: "5★",
      text: "Experience",
      textColor: "text-color2",
      borderColor: "border-secondary",
      iconBgColor: "bg-primary2",
      titleColor: "text-secondary",
      cardBgColor: "bg-primary5 shadow-sm",
      subtitle: "",
      subtitleColor: ""
    }
  ];
  businessServices: ShowcaseCardType[] = [
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRight: 'Starting from 150 SAR per person',
      badgeRightColor: 'gradient-bg',
      title: 'Team-Building Game Sessions',
      subtitle: 'Structured board game activities designed to strengthen team bonds, improve communication, and boost workplace collaboration through strategic gameplay.',
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
        { icon: 'check', content: 'Professional Game Facilitators' },
        { icon: 'check', content: 'Communication Skills Development' },
        { icon: 'check', content: 'Customized Team Challenges' },
        { icon: 'check', content: 'Performance Analytics' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRight: 'Starting from 150 SAR per person',
      badgeRightColor: 'gradient-bg',
      title: 'Team-Building Game Sessions',
      subtitle: 'Structured board game activities designed to strengthen team bonds, improve communication, and boost workplace collaboration through strategic gameplay.',
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
        { icon: 'check', content: 'Professional Game Facilitators' },
        { icon: 'check', content: 'Communication Skills Development' },
        { icon: 'check', content: 'Customized Team Challenges' },
        { icon: 'check', content: 'Performance Analytics' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRight: 'Starting from 150 SAR per person',
      badgeRightColor: 'gradient-bg',
      title: 'Team-Building Game Sessions',
      subtitle: 'Structured board game activities designed to strengthen team bonds, improve communication, and boost workplace collaboration through strategic gameplay.',
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
        { icon: 'check', content: 'Professional Game Facilitators' },
        { icon: 'check', content: 'Communication Skills Development' },
        { icon: 'check', content: 'Customized Team Challenges' },
        { icon: 'check', content: 'Performance Analytics' }
      ]
    },
    {
      imageSrc: '/assets/business-services-img1.jpg',
      category: '',
      categoryIcon: 'groups',
      categoryColor: 'bg-white text-primary',
      badgeRight: 'Starting from 150 SAR per person',
      badgeRightColor: 'gradient-bg',
      title: 'Team-Building Game Sessions',
      subtitle: 'Structured board game activities designed to strengthen team bonds, improve communication, and boost workplace collaboration through strategic gameplay.',
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
        { icon: 'check', content: 'Professional Game Facilitators' },
        { icon: 'check', content: 'Communication Skills Development' },
        { icon: 'check', content: 'Customized Team Challenges' },
        { icon: 'check', content: 'Performance Analytics' }
      ]
    }
  ];
}