import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../stat-card/stat-card'; 
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button';

@Component({
  selector: 'app-story-section',
  standalone: true,
  imports: [CommonModule, StatCardComponent, PrimaryButtonComponent],
  templateUrl: './story-section.html',
  styleUrls: ['./story-section.scss']
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

  @Input() stats!: Array<{
    iconType: 'material' | 'bootstrap';
    icon: string;
    title: string;
    text: string;
    borderColor: string;
    iconBgColor: string;
    titleColor: string;
  }>;

    @Input() buttons!: Array<{
    iconLeft?: string;
    iconRight?: string;
    text: string;
  }>;
}