import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseCardComponent } from '../showcase-card/showcase-card';

@Component({
  selector: 'app-cafe-menu-slider',
  templateUrl: './cafe-menu-slider.html',
  styleUrls: ['./cafe-menu-slider.scss'],
  standalone: true,
  imports: [CommonModule, ShowcaseCardComponent]
})
export class CafeMenuSliderComponent {
  @Input() menu: any[] = [];
  selectedIndex = 0;

  nextMenuCard() {
    if (this.selectedIndex < this.menu.length - 3) {
      this.selectedIndex++;
    }
  }

  prevMenuCard() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }
}