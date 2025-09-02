import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { I18nService } from '../i18n.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class FooterComponent implements OnInit, OnDestroy {
  footerLinks: any[] = [];
  footerDescription: string = '';
  quickLinksTitle: string = '';
  contactTitle: string = '';
  contactInfo: any = {};
  adventureTitle: string = '';
  adventureText: string = '';
  emailPlaceholder: string = '';
  subscribeBtn: string = '';
  langSub!: Subscription;

  constructor(private i18n: I18nService) {}

  ngOnInit() {
    this.loadFooterData();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadFooterData();
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  loadFooterData() {
    const footer = this.i18n.t('footer') || {};
    this.footerLinks = footer.footerLinks || [];
    this.footerDescription = footer.description || '';
    this.quickLinksTitle = footer.quickLinksTitle || 'Quick Links';
    this.contactTitle = footer.contactTitle || 'Contact & Location';
    this.contactInfo = footer.contactInfo || {};
    this.adventureTitle = footer.adventureTitle || 'Adventure Updates';
    this.adventureText = footer.adventureText || '';
    this.emailPlaceholder = footer.emailPlaceholder || 'Enter your email for magic ✨';
    this.subscribeBtn = footer.subscribeBtn || 'Start the Adventure';
  }
}