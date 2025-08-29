import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss']
})
export class HeroSectionComponent {
  @Input() backgroundImage!: string;
  @Input() subtitle!: string;
  @Input() titleParts: Array<{ text: string, class: string, breakLine?: boolean }> = [];
  @Input() subtitleParts: Array<{ text: string, class: string, breakLine?: boolean }> = [];
  @Input() headingTag: string = 'h1';
}
