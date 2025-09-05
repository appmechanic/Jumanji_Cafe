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
    // Only update if no sidebar filters are active to avoid conflicts
    if (!this.hasActiveFilters()) {
      this.featuredGames = filteredData.sort((a, b) => a.title.localeCompare(b.title));
      this.cdr.markForCheck();
    }
  }

  loadTranslations() {
    this.gameStore = this.i18n.t('gameStore');
    this.gameFilterConfig = {
      ...this.gameFilterConfig,
      allLabel: this.i18n.getCurrentLang() === 'ar' ? 'الكل' : 'All'
    };

    this.featuredGames = this.getFeaturedGameStats().sort((a, b) => a.title.localeCompare(b.title));
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

  // Add a helper method to check if the game data is loaded
  private isDataLoaded(): boolean {
    return this.featuredGames && this.featuredGames.length > 0;
  }

  // Add a method to reset filters
  resetAllFilters() {
    this.activeFilters = {};
    this.featuredGames = this.getFeaturedGameStats().sort((a, b) => a.title.localeCompare(b.title));
    this.cdr.markForCheck();
  }

  // Enhance the onSidebarFilterChange method for better error handling
  onSidebarFilterChange(filters: ActiveFilters) {
    try {
      this.activeFilters = filters;
      
      // Check if all filters are empty (user cleared all filters)
      const hasAnyActiveFilters = Object.values(filters).some(values => values && values.length > 0);
      
      // Start with all games
      let filteredGames = this.getFeaturedGameStats();
      
      if (!hasAnyActiveFilters) {
        console.log('No active filters, showing all games sorted'); 
        filteredGames.sort((a, b) => a.title.localeCompare(b.title));
        this.featuredGames = [...filteredGames];
        this.cdr.markForCheck();
        return;
      }
      
      console.log('Initial games before filtering:', filteredGames.map(g => g.title));
      
      // Apply each category of filters
      Object.keys(filters).forEach(category => {
        const activeValues = filters[category];
        
        // Skip if no filters are active for this category
        if (!activeValues || activeValues.length === 0) {
          return;
        }
        
        console.log(`Applying filter for ${category} with values:`, activeValues);
        
        switch (category) {
          case 'Number of Players':
            filteredGames = filteredGames.filter(game => {
              const playerText = game.players || '';
              const playerRange = playerText.match(/\d+/g)?.map(Number);
              return activeValues.some(value => {
                if (value === '6+') {
                  return playerRange?.some((count: number) => count >= 6);
                } else {
                  return playerRange?.includes(Number(value));
                }
              });
            });
            break;
            
          case 'Difficulty':
            filteredGames = filteredGames.filter(game => {
              const gameDifficulty = game.category || '';
              return activeValues.some(value => 
                gameDifficulty.toLowerCase() === value.toLowerCase()
              );
            });
            break;
            
          case 'Play Duration':
            filteredGames = filteredGames.filter(game => {
              const gameDuration = game.duration || '';
              return activeValues.some(value => 
                gameDuration.toLowerCase() === value.toLowerCase()
              );
            });
            break;
            
          case 'Tags':
            filteredGames = filteredGames.filter(game => {
              const gameTags = game.tags || [];
              return activeValues.some(value => 
                gameTags.some((tag: string) => tag.toLowerCase() === value.toLowerCase())
              );
            });
            break;
        }
        
        console.log(`After applying ${category} filter: ${filteredGames.length} games remain`);
      });
      
      // Sort the games by title
      filteredGames.sort((a, b) => a.title.localeCompare(b.title));
      console.log('Games after sorting:', filteredGames.map(g => g.title));
      
      this.featuredGames = [...filteredGames];
      this.cdr.markForCheck();
      
    } catch (error) {
      console.error('Error in onSidebarFilterChange:', error);
      // Fallback to showing all games
      this.featuredGames = this.getFeaturedGameStats().sort((a, b) => a.title.localeCompare(b.title));
      this.cdr.markForCheck();
    }
  }

  applyQuickFilter(category: string, value: string) {
    this.activeFilters[category] = [value];
    
    this.onSidebarFilterChange({...this.activeFilters});
  }

  hasActiveFilters(): boolean {
    return Object.values(this.activeFilters).some(values => values && values.length > 0);
  }
}