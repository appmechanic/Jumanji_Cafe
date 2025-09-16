import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.scss'],
  imports: [CommonModule]
})
export class StatCardComponent {
  @Input() iconType!: 'material' | 'bootstrap'; 
  @Input() btniconType!: 'material' | 'bootstrap'; 
  @Input() icon!: string;
  @Input() titleicon!: string;
  @Input() btnIcon!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() text!: string;
  @Input() textColor: string = '';
  @Input() borderColor: string = '';
  @Input() cardBgColor: string = '';
  @Input() border: string = '';
  @Input() iconBgColor: string = '';
  @Input() titleColor: string = '';
@Input() subtitleColor: string = '';
@Input() btnText?: string;
@Input() btnColor?: string;

isClass(value: string): boolean {
  // Accepts only class names (letters, numbers, dashes, underscores)
  return /^[\w- ]+$/.test(value);
}
getClassNames(): string[] {
  const classes: string[] = [];
  if (this.isClass(this.cardBgColor)) classes.push(this.cardBgColor);
  if (this.isClass(this.borderColor)) classes.push(this.borderColor);
  return classes;
}
// StatCardComponent is already standalone and ready for use in standalone Angular components.
}