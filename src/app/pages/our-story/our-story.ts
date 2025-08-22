import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { StorySectionComponent } from '../../shared/story-section/story-section';


export type StatCardType = {
  iconType: "material" | "bootstrap";
  icon: string;
  title: string;
  text: string;
  borderColor: string;
  iconBgColor: string;
  titleColor: string;
  cardBgColor: string;
};

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, StorySectionComponent],
  templateUrl: './our-story.html',
  styleUrls: ['./our-story.scss']
})
export class OurStory {
  storyStats: StatCardType[] = [
      {
        iconType: 'material',
        icon: 'favorite',
        title: '5★',
        text: 'Experience',
        borderColor: 'border-secondary',
        iconBgColor: 'bg-secondary2',
        titleColor: 'text-secondary',
        cardBgColor: 'bg-white'
      },
      {
        iconType: 'bootstrap',
        icon: 'bi-star-fill',
        title: 'Top-notch',
        text: 'Quality',
        borderColor: 'border-primary',
        iconBgColor: 'bg-primary2',
        titleColor: 'text-primary',
        cardBgColor: 'bg-white'
      }
    ];
 }