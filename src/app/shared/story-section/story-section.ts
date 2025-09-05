import { Component, Input } from '@angular/core';
import { StatCardComponent } from '../stat-card/stat-card'; 
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-section',
  standalone: true,
  imports: [CommonModule, StatCardComponent, PrimaryButtonComponent],
  templateUrl: './story-section.html',
  styleUrls: ['./story-section.scss']
})
export class StorySectionComponent {
  gradientDir: string = 'to right';
@Input() imageSrc: string = '';
  @Input() textOverImage1: string = '';
  @Input() textOverImage1BgColor: string = '';
  @Input() textOverImage1Color: string = '';
  @Input() icon1: string = '';
  @Input() icon1Color: string = '';
  @Input() textOverImage2: string = '';
  @Input() textOverImage2BgColor: string = '';
  @Input() textOverImage2Color: string = '';
  @Input() icon2: string = '';
  @Input() icon2Color: string = '';
  @Input() titleicon: string = '';
  @Input() iconType: string = '';
  @Input() titleParts: string[] = [];
  @Input() description: string[] = [];
  @Input() stats: any[] = [];
  @Input() buttons: any[] = [];

onButtonClick(button: any) {
  if (button.onClick) {
    button.onClick();
  }
}
}