import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'point-guide-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-guide-list.html',
  styleUrls: ['./point-guide-list.scss']
})
export class PointGuideListComponent {
@Input() icon: string = '';
@Input() iconType: 'bootstrap' | 'material' = 'bootstrap';
@Input() iconColor: string = '';
@Input() title: string = '';
@Input() subtitle?: string;
@Input() cardColor: string = '';
}