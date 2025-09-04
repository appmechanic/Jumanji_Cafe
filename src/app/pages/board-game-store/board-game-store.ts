import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { FilterComponent, FilterConfig } from '../../shared/filter-tab/filter-tab';
import { ShowcaseCardComponent } from '../../shared/showcase-card/showcase-card';
import { SidebarFilterComponent } from '../../shared/sidebar-filter/sidebar-filter';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';

export type ShowcaseCardType = {
  imageSrc: string;
  category: string;
  categoryColor: string;
  categoryIcon: string;
  title: string;
  subtitle: string;
  players: string;
  duration: string;
  tags: string[];
  tagColor: string;
  gameCategory: string;
  buttonText: string;
  buttonColor: string;
  showDetailIcon: boolean;
  detailIcon: string;
  starCount?: number;
  starColor?: string;
  playersClass?: string;
  durationClass?: string;
  price?: string;
  priceColor?: string;
  badgeRight?: string;
  badgeRightColor?: string;
  eventDate?: string;
  eventTime?: string;
  attending: number;
  capacity: number;
};

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    FilterComponent,
    ShowcaseCardComponent,
    SidebarFilterComponent
  ],
  templateUrl: './board-game-store.html',
  styleUrls: ['./board-game-store.scss']
})
export class BoardGameStore implements OnInit, OnDestroy {
  selectedIndex = 0;
  gameStore: any = {};
  featuredGames: any[] = [];
  sidebarFilters: any[] = [];

  featuredGameStats = [
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-secondary",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-success",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-danger",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-success",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    },
    {
      imageSrc: "/assets/cafe-game-img1.jpg",
      categoryColor: "bg-secondary5 text-secondary",
      categoryIcon: "",
      starCount: 4,
      starColor: "bg-secondary text-white",
      playersClass: "text-primary fw-600",
      durationClass: "text-secondary fw-600",
      tagColor: "bg-primary2",
      buttonColor: "bg-primary text-white",
      showDetailIcon: true,
      detailIcon: "bi-cart",
      attending: 0,
      capacity: 0
    }
  ];
  gameFilterConfig: FilterConfig = {
    property: 'tags',
    includeAll: true,
    allLabel: ''
  };

  langSub!: Subscription;
  public direction: string = 'ltr';
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.loadTranslations();
    this.sidebarFilters = this.getSidebarFilters();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
      this.sidebarFilters = this.getSidebarFilters();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  onGamesFilteredDataChange(filteredData: ShowcaseCardType[]): void {
    this.featuredGames = filteredData;
  }

  loadTranslations() {
    this.gameStore = this.i18n.t('gameStore');
    this.gameFilterConfig = {
      ...this.gameFilterConfig,
      allLabel: this.i18n.getCurrentLang() === 'ar' ? 'الكل' : 'All'
    };

    this.featuredGames = this.getFeaturedGameStats();
  }
  onLanguageChanged() {
    this.loadTranslations();
  }
  getFeaturedGameStats(): any[] {
    const items = this.i18n.t('gameStore.featured-game.items') as any[];
    return items.map((item: any, idx: number) => ({
      ...item,
      ...this.featuredGameStats[idx]
    }));
  }

  getSidebarFilters(): any[] {
    const featuredGames = this.getFeaturedGameStats();

    // Calculate player ranges dynamically
    const playerCounts = featuredGames
      .map(game => game.players.match(/\d+/g)?.map(Number) || [])
      .flat();
    const uniquePlayerCounts = [...new Set(playerCounts)].sort((a, b) => a - b);

    const playerOptions = uniquePlayerCounts.map(count => (count > 5 ? '6+' : count.toString()));
    const finalPlayerOptions = [...new Set(playerOptions)];

    return [
      {
        label: 'Number of Players',
        options: finalPlayerOptions
      },
      {
        label: 'Play Duration',
        options: [...new Set(featuredGames.map(game => game.duration))]
      },
      {
        label: 'Difficulty',
        options: [...new Set(featuredGames.map(game => game.category))]
      },
      {
        label: 'Tags',
        options: [...new Set(featuredGames.flatMap(game => game.tags))]
      }
    ];
  }

  onSidebarFilterChange(filter: { label: string; value: string }) {
    console.log(`Filter change received: ${filter.label} = ${filter.value}`);
    
    if (filter.value === 'all') {
      // Reset to show all games
      this.featuredGames = this.getFeaturedGameStats();
      console.log('Resetting to show all games');
      return;
    }

    switch (filter.label) {
      case 'Number of Players':
        if (filter.value === '6+') {
          this.featuredGames = this.getFeaturedGameStats().filter(game => {
            const playerRange = game.players.match(/\d+/g)?.map(Number);
            return playerRange?.some((count: number) => count > 5);
          });
        } else {
          this.featuredGames = this.getFeaturedGameStats().filter(game => {
            const playerRange = game.players.match(/\d+/g)?.map(Number);
            return playerRange?.some((count: number) => count === Number(filter.value));
          });
        }
        break;
      case 'Play Duration':
        this.featuredGames = this.getFeaturedGameStats().filter(game => game.duration === filter.value);
        break;
      case 'Difficulty':
        this.featuredGames = this.getFeaturedGameStats().filter(game => game.category === filter.value);
        break;
      case 'Tags':
        this.featuredGames = this.getFeaturedGameStats().filter(game => game.tags.includes(filter.value));
        break;
      default:
        console.log('No matching filter logic found.');
    }
    console.log('Filtered games:', this.featuredGames);
  }
}