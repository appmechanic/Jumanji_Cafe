import { Component, OnInit, HostListener, OnDestroy, ChangeDetectorRef } from '@angular/core';
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

// Update this interface to match the structure from the sidebar filter
interface ActiveFilters {
  [category: string]: string[];
}

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
  constructor(private i18n: I18nService, private cdr: ChangeDetectorRef) { }

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

  activeFilters: ActiveFilters = {};

  getSidebarFilters(): any[] {
    const featuredGames = this.getFeaturedGameStats();

    // Calculate player ranges dynamically
    const playerCounts = featuredGames
      .map(game => game.players.match(/\d+/g)?.map(Number) || [])
      .flat();
    const uniquePlayerCounts = [...new Set(playerCounts)].sort((a, b) => a - b);

    // Convert player counts to option objects with label and value
    const playerOptions = uniquePlayerCounts.map(count => ({
      label: count > 5 ? '6+ players' : `${count} players`,
      value: count > 5 ? '6+' : count.toString()
    }));

    return [
      {
        label: 'Number of Players',
        options: playerOptions
      },
      {
        label: 'Play Duration',
        options: [...new Set(featuredGames.map(game => game.duration))].map(duration => ({
          label: duration,
          value: duration
        }))
      },
      {
        label: 'Difficulty',
        options: [...new Set(featuredGames.map(game => game.category))].map(difficulty => ({
          label: difficulty,
          value: difficulty
        }))
      },
      {
        label: 'Tags',
        options: [...new Set(featuredGames.flatMap(game => game.tags))].map(tag => ({
          label: tag,
          value: tag
        }))
      }
    ];
  }

  onSidebarFilterChange(filters: ActiveFilters) {
    console.log('Active filters received:', filters);
    this.activeFilters = filters;
    
    // Start with all games
    let filteredGames = this.getFeaturedGameStats();
    
    // Apply each category of filters
    Object.keys(filters).forEach(category => {
      const activeValues = filters[category];
      
      // Skip if no filters are active for this category
      if (!activeValues || activeValues.length === 0) {
        return;
      }
      
      switch (category) {
        case 'Number of Players':
          filteredGames = filteredGames.filter(game => {
            const playerRange = game.players.match(/\d+/g)?.map(Number);
            return activeValues.some(value => {
              if (value === '6+') {
                return playerRange?.some((count: number) => count > 5);
              } else {
                return playerRange?.some((count: number) => count === Number(value));
              }
            });
          });
          break;
          
        case 'Difficulty':
          // Fix the difficulty filtering - use correct property mapping
          filteredGames = filteredGames.filter(game => {
            return activeValues.includes(game.category);
          });
          break;
          
        case 'Play Duration':
          filteredGames = filteredGames.filter(game => 
            activeValues.includes(game.duration)
          );
          break;
          
        case 'Tags':
          filteredGames = filteredGames.filter(game => 
            activeValues.some(tag => game.tags.includes(tag))
          );
          break;
      }
    });
    
    // Use a different array reference to ensure change detection
    this.featuredGames = [...filteredGames];
    
    // Force change detection to update the UI
    this.cdr.detectChanges();
    
    console.log('Filtered games:', this.featuredGames.length, 'of', this.getFeaturedGameStats().length);
    console.log('Filtered game categories:', this.featuredGames.map(game => game.category));
  }
}