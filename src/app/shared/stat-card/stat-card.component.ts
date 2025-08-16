import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css'],
  imports: [CommonModule]
})
export class StatCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() text!: string;
  @Input() borderColor: string = '';
  @Input() iconBgColor: string = '';
  @Input() titleColor: string = '';
}