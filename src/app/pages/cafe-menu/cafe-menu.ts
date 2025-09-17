import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { ShowcaseCardComponent, ListItem } from '../../shared/showcase-card/showcase-card';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';


export type ShowcaseCardType = {
  imageSrc: string;
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonColor: string;
  price?: string;
  priceColor?: string;
  badgeRight?: string;
  showDetailIcon?: boolean;
  badgeRightColor?: string;
};

@Component({
  selector: 'app-cafe-menu',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    ShowcaseCardComponent
  ],
  templateUrl: './cafe-menu.html',
  styleUrls: ['./cafe-menu.scss']
})
export class CafeMenu {
  cafeMenu: any = {};
  langSub?: Subscription;
  cafeMenuStats = [
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-primary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,

    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-secondary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-primary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-primary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false,
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-primary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-secondary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false
    },
    {
      imageSrc: '/assets/cafe-menu-img1.jpg',
      category: '',
      categoryColor: 'bg-primary text-white',
      title: '',
      price: '',
      priceColor: 'bg-secondary2',
      subtitle: '',
      buttonText: '',
      buttonColor: 'bg-primary text-white',
      showDetailIcon: false
    }
  ];

  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  loadTranslations() {
    this.cafeMenu = this.i18n.t('cafeMenu');
    const items = this.i18n.t('cafeMenu.items') as any[];

  }

  onLanguageChanged() {
    this.loadTranslations();
  }

  getCafeMenuStats(): any[] {
    const items = this.i18n.t('cafeMenu.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...this.cafeMenuStats[idx],
      ...item
    }));
  }
}