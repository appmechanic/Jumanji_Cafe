import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { StatCardComponent } from '../../shared/stat-card/stat-card';
import { CtaSectionComponent } from '../../shared/CTA-Section/CTA-Section';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import { InfoStatBar } from '../../shared/info-stat-bar/info-stat-bar';
import { PointsLevelCardComponent } from '../../shared/points-level-card/points-level-card';
import { PointGuideListComponent } from '../../shared/point-guide-list/point-guide-list';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';

export type StatCardType = {
  iconType: "material" | "bootstrap";
  icon: string;
  title: string;
  text: string;
  textColor: string;
  borderColor: string;
  iconBgColor: string;
  titleColor: string;
  subtitle: string;
  subtitleColor: string;
  cardBgColor: string;
  titleicon: string;
};

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [
    CommonModule,
    HeadingSectionComponent,
    StatCardComponent,
    CtaSectionComponent,
    PrimaryButtonComponent,
    GhostButtonComponent,
    InfoStatBar,
    PointsLevelCardComponent,
    PointGuideListComponent
  ],
  templateUrl: './rewards.html',
  styleUrls: ['./rewards.scss']
})
export class Rewards implements OnInit, OnDestroy {

  rewards: any = {};
  langSub?: Subscription;

  heroStats = [
    {
      iconType: "",
      icon: "",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "",
      titleColor: "text-secondary",
      cardBgColor: "",
    },
    {
      iconType: "",
      icon: "",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "",
      titleColor: "text-secondary",
      cardBgColor: "",
    },
    {
      iconType: "",
      icon: "",
      textColor: "text-white2",
      borderColor: "border-none",
      iconBgColor: "",
      titleColor: "text-secondary",
      cardBgColor: "",
    }
  ];

  redeemStats = [
    {
      iconType: "bootstrap",
      icon: "bi-cup",
      textColor: "text-info fw-600 mt-2 fs-24",
      borderColor: "border border-success",
      iconBgColor: "bg-info text-white",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm border-success",
      subtitleColor: "text-color2",
      btnColor: 'bg-primary text-white cursor-pointer',
      btnIcon: 'bi-gift',
      btniconType: "bootstrap"
    },
    {
      iconType: "bootstrap",
      icon: "bi-cloud-rain-heavy",
      textColor: "text-primary fw-600 mt-2 fs-24",
      borderColor: "border-none",
      iconBgColor: "bg-success text-white",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color2",
      btnColor: 'bg-#ededed text-color cursor-not-allowed',
      btnIcon: 'bi-lock',
      btniconType: "bootstrap"
    },
    {
      iconType: "material",
      icon: "percent",
      textColor: "text-primary fw-600 mt-2 fs-24",
      borderColor: "border-none",
      iconBgColor: "bg-danger text-white",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color2",
      btnColor: 'bg-#ededed text-color cursor-not-allowed',
      btnIcon: 'bi-lock',
      btniconType: "bootstrap"
    },
    {
      iconType: "bootstrap",
      icon: "bi-controller",
      textColor: "text-primary fw-600 mt-2 fs-24",
      borderColor: "border-none",
      iconBgColor: "bg-orange2 text-white",
      titleColor: "text-secondary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color2",
      btnColor: 'bg-#ededed text-color cursor-not-allowed',
      btnIcon: 'bi-lock',
      btniconType: "bootstrap"
    }
  ];

  workStats = [
    {
      iconType: "material",
      icon: "album",
      textColor: "text-color2 mt-2",
      borderColor: "border-none",
      iconBgColor: "bg-info text-white",
      titleColor: "text-primary",
      cardBgColor: "bg-none",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "bootstrap",
      icon: "bi-bar-chart",
      textColor: "text-color2 mt-2",
      borderColor: "border-none",
      iconBgColor: "bg-orange2 text-white",
      titleColor: "text-primary",
      cardBgColor: "bg-none",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "bootstrap",
      icon: "bi-gift",
      textColor: "text-color2 mt-2",
      borderColor: "border-none",
      iconBgColor: "bg-success text-white",
      titleColor: "text-primary",
      cardBgColor: "bg-none",
      subtitleColor: "text-color fw-600"
    }
  ];

  achievementStats = [
    {
      iconType: "material",
      icon: "leaderboard",
      borderColor: "border border-2 border-success",
      iconBgColor: "bg-primary text-white",
      titleColor: "text-color",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "material",
      icon: "local_cafe",
      borderColor: "border border-2 border-success",
      iconBgColor: "bg-primary text-white",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "bootstrap",
      icon: "bi-trophy-fill",
      borderColor: "border border-2 border-dark",
      iconBgColor: "bg-light2 text-color",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "bootstrap",
      icon: "bi-controller",
      borderColor: "border border-2 border-success",
      iconBgColor: "bg-primary text-white",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "bootstrap",
      icon: "bi-people",
      borderColor: "border border-2 border-dark",
      iconBgColor: "bg-light2 text-color",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color fw-600"
    },
    {
      iconType: "material",
      icon: "cake",
      borderColor: "border border-2 border-success",
      iconBgColor: "bg-primary text-white",
      titleColor: "text-primary",
      cardBgColor: "bg-white shadow-sm",
      subtitleColor: "text-color fw-600"
    }
  ];

  pointGuideItems = [
    { icon: 'bi-cup', iconType: 'bootstrap', iconColor: 'text-primary bg-white' },
    { icon: 'bi-fork-knife', iconType: 'bootstrap', iconColor: 'text-primary bg-white' },
    { icon: 'bi-controller', iconType: 'bootstrap', iconColor: 'text-primary bg-white' },
    { icon: 'bi-calendar-event', iconType: 'bootstrap', iconColor: 'text-primary bg-white' }
  ];

  highlightInfoStats = [
    {
      icon: '',
      iconClass: '',
      titleColor: 'text-secondary',
      textColor: 'text-white'
    },
    {
      icon: '',
      iconClass: '',
      titleColor: 'text-secondary',
      textColor: 'text-white'
    },
    {
      icon: '',
      iconClass: '',
      titleColor: 'text-secondary',
      textColor: 'text-white'
    }
  ];

  constructor(public i18n: I18nService) { }

  ngOnInit(): void {
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.onLanguageChanged();
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  loadTranslations() {
    this.rewards = this.i18n.t('rewards');
  }

  onLanguageChanged() {
    this.loadTranslations();
  }

  getheroStats(): any[] {
    const stats = this.i18n.t('rewards.hero.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.heroStats[idx]
    }));
  }

  getredeemStats(): any[] {
    const stats = this.i18n.t('rewards.redeem.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.redeemStats[idx]
    }));
  }

  getworkStats(): any[] {
    const stats = this.i18n.t('rewards.work.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.workStats[idx]
    }));
  }

  getachievementStats(): any[] {
    const stats = this.i18n.t('rewards.achievement.stats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.achievementStats[idx]
    }));
  }
  gethighlightInfoStats(): any[] {
    const stats = this.i18n.t('rewards.ctaLast.infoStats') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.highlightInfoStats[idx]
    }));
  }
  getpointGuideItems(): any[] {
    const stats = this.i18n.t('rewards.pointGuideItems') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.pointGuideItems[idx]
    }));
  }

}