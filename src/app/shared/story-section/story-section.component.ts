import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../stat-card/stat-card.component'; 
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-story-section',
  standalone: true,
  imports: [CommonModule, StatCardComponent, PrimaryButtonComponent],
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.css']
})
export class StorySectionComponent {
  @Input() imageSrc!: string;
  @Input() textOverImage1?: string;
  @Input() textOverImage2?: string;
  @Input() icon1?: string;
  @Input() icon2?: string;
  @Input() titleicon?: string;
  @Input() iconType?: string;
  @Input() titleParts!: string[];
  @Input() description!: string[];

  // Accept stats dynamically from the page
  @Input() stats!: Array<{
    icon: string;
    title: string;
    text: string;
    borderColor: string;
    iconBgColor: string;
    titleColor: string;
  }>;

  @Input() buttons!: Array<{
    icon?: string;
    iconPosition?: 'left' | 'right';
    text: string;
  }>;
}