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
  @Input() icon!: string;
  @Input() titleicon!: string;
  
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
}