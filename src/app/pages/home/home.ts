import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button.component';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button.component';
import { StatCardComponent } from '../../shared/stat-card/stat-card.component';
import { StorySectionComponent } from '../../shared/story-section/story-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    PrimaryButtonComponent,
    GhostButtonComponent,
    StatCardComponent,
    StorySectionComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
