import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const toggler = document.querySelector('.navbar-toggler');
    toggler?.addEventListener('click', () => {
      const barsIcon = toggler.querySelector('[data-icon="bars"]');
      const timesIcon = toggler.querySelector('[data-icon="times"]');
      const isExpanded = toggler.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        barsIcon?.classList.add('d-none');
        timesIcon?.classList.remove('d-none');
      } else {
        barsIcon?.classList.remove('d-none');
        timesIcon?.classList.add('d-none');
      }
    });
  }
}