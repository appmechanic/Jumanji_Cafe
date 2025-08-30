import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { NewsletterComponent } from '../../shared/newsletter/newsletter';
import { ContactForm } from '../../shared/contact-form/contact-form';
import { LocationCard } from '../../shared/location-card/location-card';
import { HoursCard } from '../../shared/hours-card/hours-card';
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
export class ContactUs {
  heroStats: StatCardType[] = [
    {
      iconType: "material",
      icon: "sports_esports",
      titleicon: "",
      title: "200+",
      text: "Board Games",
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
      title: "50+",
      titleicon: "",
      text: "Specialty Drinks",
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
      title: "Daily",
      text: "Events",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "bg-primary2",
      titleColor: "text-primary",
      cardBgColor: "bg-none",
      subtitle: "",
      subtitleColor: "",
    }
  ];
  AdventureStats: StatCardType[] = [
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
}