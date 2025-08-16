import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @Input() backgroundImage!: string;
  @Input() subtitle!: string;
  @Input() titleParts: { text: string; class: string }[] = [];
  @Input() subtitleParts: { text: string; class: string }[] = [];
}
