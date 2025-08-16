import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { StorySectionComponent } from '../../shared/story-section/story-section.component';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, StorySectionComponent],
  templateUrl: './our-story.html',
  styleUrls: ['./our-story.css']
})
export class OurStory { }