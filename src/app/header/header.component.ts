import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';
import { I18nService } from '../i18n.service';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  cartItems: any[] = [];
  isDarkMode: boolean = false;
  currentLang = 'en';
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  navLinks: { label: string; url: string }[] = [];

  constructor(
    private themeService: ThemeService,
    private i18n: I18nService,
    private cartService: CartService,
    @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef
  ) {
    this.currentLang = this.i18n.getCurrentLang();
    this.loadNavLinks();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme();
  }

  async changeLang(lang: string) {
    if (lang !== this.currentLang) {
      await this.i18n.setLang(lang);
      this.currentLang = lang;
      await this.loadNavLinks();
      this.cdr.detectChanges();
    }
  }

  async loadNavLinks() {
    const navLinks = this.i18n.t('header.navLinks');
    this.navLinks = Array.isArray(navLinks) ? navLinks : [];
  }

  ngOnInit(): void {
    this.currentLang = this.i18n.getCurrentLang();
    this.loadNavLinks();
    this.checkLoginStatus();

    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
      this.cdr.detectChanges();
    });

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

  checkLoginStatus(): void {
    const userInfo = localStorage.getItem('userInfo');
    this.isLoggedIn$.next(!!userInfo);
  }

  getTotalItemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
}