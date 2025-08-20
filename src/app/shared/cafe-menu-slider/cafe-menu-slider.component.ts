import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cafe-menu-slider',
  templateUrl: './cafe-menu-slider.html',
  styleUrls: ['./cafe-menu-slider.scss']
})
export class CafeMenuSliderComponent implements AfterViewInit {
  selectedIndex = 0;

  ngAfterViewInit() {
    const carouselElement = document.getElementById('cafeMenuCarousel');
    if (carouselElement) {
      carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
        this.selectedIndex = event.to;
      });
    }
  }
}