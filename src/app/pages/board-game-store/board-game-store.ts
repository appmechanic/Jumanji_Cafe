import { Component, OnInit, HostListener, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { FilterComponent, FilterConfig } from '../../shared/filter-tab/filter-tab';
import { ShowcaseCardComponent } from '../../shared/showcase-card/showcase-card';
import { SidebarFilterComponent } from '../../shared/sidebar-filter/sidebar-filter';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';
import { ProductDetailComponent } from '../../shared/product-detail/product-detail.component';

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
  age: number;
  ageClass: string;
  gameType: string;
  gameTypeClass: string;
};

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
    SidebarFilterComponent,
    ProductDetailComponent
  ],
  templateUrl: './board-game-store.html',
  styleUrls: ['./board-game-store.scss']
})
export class BoardGameStore implements OnInit, OnDestroy {
  selectedIndex = 0;
  gameStore: any = {};
  featuredGames: any[] = [];
  sidebarFilters: any[] = [];

  // Add modal state
  showProductDetailModal: boolean = false;
  selectedProduct: any = {};

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
      capacity: 0,
      age: "6+",
      gameType: "Family Night",     
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
      capacity: 0,
      age: "10+",
      gameType: "Quick Party Game"
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
      capacity: 0,
      age: "8+",
      gameType: "Strategy Masters"
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
      capacity: 0,
      age: "12+",
      gameType: "Family Night"
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
      capacity: 0,
      age: "16+",
      gameType: "Strategy Masters"
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
      capacity: 0,
      age: "16+",
      gameType: "Strategy Masters"
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
      capacity: 0,
      age: "12+",
      gameType: "Family Night"
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
    if (!this.hasActiveFilters()) {
      this.featuredGames = filteredData;
      this.cdr.markForCheck();
    }
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
      ...this.featuredGameStats[idx % this.featuredGameStats.length],
      // Add product detail data
      productDetail: true,
      productId: item.id || `F${idx + 1}`
    }));
  }

  // Handle card click for product detail
  onCardClick(event: any) {
    if (event.productId) {
      const productDetails = this.i18n.t('gameStore.productDetails');
      const selectedProductData = productDetails[event.productId];
      
      if (selectedProductData) {
        this.selectedProduct = {
          ...selectedProductData,
          categoryColor: "bg-secondary5 text-secondary",
          starColor: "bg-secondary text-white",
          tagColor: "bg-primary2",
          buttonColor: "bg-primary text-white"
        };
        this.showProductDetailModal = true;
      } else {
        console.log('Product details not found for ID:', event.productId);
      }
    }
  }

  // Close product detail modal
  closeProductDetailModal() {
    this.showProductDetailModal = false;
    this.selectedProduct = {};
  }

  activeFilters: ActiveFilters = {};

  getSidebarFilters(): any[] {
    const featuredGames = this.getFeaturedGameStats();

    const playerRanges = new Set<string>();

    featuredGames.forEach(game => {
      const playerText = game.players || '';
      const playerNumbers = playerText.match(/\d+/g)?.map(Number) || [];

      if (playerNumbers.length > 0) {
        const minPlayers = Math.min(...playerNumbers);
        const maxPlayers = Math.max(...playerNumbers);

        for (let i = minPlayers; i <= Math.min(maxPlayers, 5); i++) {
          playerRanges.add(i.toString());
        }

        if (maxPlayers >= 6) {
          playerRanges.add('6+');
        }
      }
    });

    const filters = [];

    if (playerRanges.size > 0) {
      const playerOptions = Array.from(playerRanges)
        .sort((a, b) => {
          if (a === '6+') return 1;
          if (b === '6+') return -1;
          return Number(a) - Number(b);
        })
        .map(range => ({
          label: range === '6+' ?
            (this.i18n.getCurrentLang() === 'ar' ? '6+ لاعبين' : '6+ players') :
            (this.i18n.getCurrentLang() === 'ar' ? `${range} لاعبين` : `${range} players`),
          value: range,
          icon: 'bi-people'
        }));

      filters.push({
        label: this.i18n.getCurrentLang() === 'ar' ? 'عدد اللاعبين' : 'Number of Players',
        icon: 'bi-people-fill',
        options: playerOptions
      });
    }

    // Add other filters
    const durations = [...new Set(featuredGames.map(game => game.duration))].filter(duration => duration);
    if (durations.length > 0) {
      filters.push({
        label: this.i18n.getCurrentLang() === 'ar' ? 'مدة اللعب' : 'Play Duration',
        icon: 'bi-clock',
        options: durations.map(duration => ({
          label: duration,
          value: duration,
          icon: 'bi-clock'
        }))
      });
    }

    const difficulties = [...new Set(featuredGames.map(game => game.category))].filter(category => category);
    if (difficulties.length > 0) {
      filters.push({
        label: this.i18n.getCurrentLang() === 'ar' ? 'مستوى الصعوبة' : 'Difficulty',
        icon: 'bi-bar-chart-steps',
        options: difficulties.map(difficulty => ({
          label: difficulty,
          value: difficulty,
          icon: 'bi-star'
        }))
      });
    }

    // Add Age Group filter
    const ages = [...new Set(featuredGames.map(game => game.age))].filter(age => age);
    if (ages.length > 0) {
      filters.push({
        label: this.i18n.getCurrentLang() === 'ar' ? 'الفئة العمرية' : 'Age Group',
        icon: 'bi-person-check',
        options: ages.map(age => ({
          label: age,
          value: age,
          icon: 'bi-person-check'
        }))
      });
    }

    const tags = [...new Set(featuredGames.flatMap(game => game.tags))].filter(tag => tag);
    if (tags.length > 0) {
      filters.push({
        label: this.i18n.getCurrentLang() === 'ar' ? 'العلامات' : 'Tags',
        icon: 'bi-tags',
        options: tags.map(tag => ({
          label: tag,
          value: tag,
          icon: 'bi-tag'
        }))
      });
    }

    // Add Quick Find section - only if we have gameType data
    const gameTypes = [...new Set(featuredGames.map(game => game.gameType))].filter(type => type);
    if (gameTypes.length > 0) {
      filters.push({
        label: this.i18n.getCurrentLang() === 'ar' ? 'البحث السريع' : 'Quick Find',
        icon: 'bi-search',
        isQuickFind: true,
        subtitle: this.i18n.getCurrentLang() === 'ar' ? 'تبحث عن شيء محدد؟' : 'Looking for something specific?',
        options: [
          {
            label: this.i18n.getCurrentLang() === 'ar' ? 'ليلة عائلية' : 'Family Night',
            value: 'Family Night',
            icon: 'bi-house-heart'
          },
          {
            label: this.i18n.getCurrentLang() === 'ar' ? 'لعبة حفلة سريعة' : 'Quick Party Game',
            value: 'Quick Party Game',
            icon: 'bi-lightning'
          },
          {
            label: this.i18n.getCurrentLang() === 'ar' ? 'أساتذة الاستراتيجية' : 'Strategy Masters',
            value: 'Strategy Masters',
            icon: 'bi-trophy'
          }
        ]
      });
    }

    return filters;
  }

  private isDataLoaded(): boolean {
    return this.featuredGames && this.featuredGames.length > 0;
  }

  resetAllFilters() {
    this.activeFilters = {};
    this.featuredGames = this.getFeaturedGameStats();
    this.cdr.markForCheck();
  }

  onSidebarFilterChange(filters: ActiveFilters) {
    try {
      this.activeFilters = filters;

      const hasAnyActiveFilters = Object.values(filters).some(values => values && values.length > 0);

      let filteredGames = this.getFeaturedGameStats();

      if (!hasAnyActiveFilters) {
        this.featuredGames = [...filteredGames];
        this.cdr.markForCheck();
        return;
      }

      Object.keys(filters).forEach(category => {
        const activeValues = filters[category];

        if (!activeValues || activeValues.length === 0) {
          return;
        }

        // Handle both English and Arabic labels
        const isPlayersCategory = category === 'Number of Players' || category === 'عدد اللاعبين';
        const isDifficultyCategory = category === 'Difficulty' || category === 'مستوى الصعوبة';
        const isDurationCategory = category === 'Play Duration' || category === 'مدة اللعب';
        const isTagsCategory = category === 'Tags' || category === 'العلامات';
        const isAgeCategory = category === 'Age Group' || category === 'الفئة العمرية';
        const isQuickFindCategory = category === 'Quick Find' || category === 'البحث السريع';

        switch (true) {
          case isPlayersCategory:
            filteredGames = filteredGames.filter(game => {
              const playerText = game.players || '';
              const playerRange = playerText.match(/\d+/g)?.map(Number);

              if (!playerRange || playerRange.length === 0) return false;

              const minPlayers = Math.min(...playerRange);
              const maxPlayers = Math.max(...playerRange);

              return activeValues.some(value => {
                if (value === '6+') {
                  return maxPlayers >= 6;
                } else {
                  const selectedPlayerCount = Number(value);
                  return selectedPlayerCount >= minPlayers && selectedPlayerCount <= maxPlayers;
                }
              });
            });
            break;

          case isDifficultyCategory:
            filteredGames = filteredGames.filter(game => {
              const gameDifficulty = game.category || '';
              return activeValues.some(value =>
                gameDifficulty.toLowerCase() === value.toLowerCase()
              );
            });
            break;

          case isDurationCategory:
            filteredGames = filteredGames.filter(game => {
              const gameDuration = game.duration || '';
              return activeValues.some(value =>
                gameDuration.toLowerCase() === value.toLowerCase()
              );
            });
            break;

          case isAgeCategory:
            filteredGames = filteredGames.filter(game => {
              const gameAge = game.age || '';
              return activeValues.some(selectedAge => {
                const selectedAgeNum = parseInt(selectedAge.replace('+', ''));
                const gameAgeNum = parseInt(gameAge.replace('+', ''));
                return gameAgeNum >= selectedAgeNum;
              });
            });
            break;

          case isTagsCategory:
            filteredGames = filteredGames.filter(game => {
              const gameTags = game.tags || [];
              return activeValues.some(value =>
                gameTags.some((tag: string) => tag.toLowerCase() === value.toLowerCase())
              );
            });
            break;

          case isQuickFindCategory:
            filteredGames = filteredGames.filter(game => {
              return activeValues.some(value => {
                switch (value) {
                  case 'Family Night':
                    return game.tags?.includes('Family Picks') || game.tags?.includes('اختيارات عائلية');
                  case 'Quick Party Game':
                    return game.tags?.includes('Quick Games') || game.tags?.includes('ألعاب سريعة');
                  case 'Strategy Masters':
                    return game.category?.toLowerCase() === 'hard' || game.category?.toLowerCase() === 'صعب';
                  default:
                    return false;
                }
              });
            });
            break;
        }
      });

      this.featuredGames = [...filteredGames];
      this.cdr.markForCheck();

    } catch (error) {
      this.featuredGames = this.getFeaturedGameStats();
      this.cdr.markForCheck();
    }
  }

  applyQuickFilter(category: string, value: string) {
    this.activeFilters[category] = [value];

    this.onSidebarFilterChange({ ...this.activeFilters });
  }

  hasActiveFilters(): boolean {
    return Object.values(this.activeFilters).some(values => values && values.length > 0);
  }
}