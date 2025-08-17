import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-360-viewer',
  standalone: true,
  templateUrl: './image-360-viewer.html',
  styleUrls: ['./image-360-viewer.scss'],
  imports: [CommonModule]
})
export class Image360ViewerComponent {
  @Input() imageSrc: string = '';
  @Input() badgeLeft: string = '';
  @Input() badgeRight: string = '';
  @Input() badgeRightColor: string = 'bg-dark text-white';
  @Input() playIcon: string = 'play_arrow'; 
  @Input() playIconType: 'material' | 'bootstrap' = 'material';
}