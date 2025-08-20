import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-menu-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafe-menu-slider.html',
//   styleUrls: ['./cafe-menu-slider.scss']
})
export class CafeMenuSliderComponent {
  @Input() menu: any[] = [];
}
