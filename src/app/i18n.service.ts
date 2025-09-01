import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private currentLang = 'en';
  private translations: any = {};
  langChanged$ = new Subject<void>();

  constructor() {
    this.loadTranslationsSync();
  }

  getCurrentLang() {
    return this.currentLang;
  }

  async setLang(lang: string) {
    this.currentLang = lang;
    await this.loadTranslations();
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.langChanged$.next(); // Notify subscribers
  }

  t(key: string): any {
    return key
      .split('.')
      .reduce(
        (obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined),
        this.translations
      ) ?? key;
  }

  private loadTranslationsSync() {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/i18n/${this.currentLang}.json`, false);
    req.send(null);
    if (req.status === 200) {
      this.translations = JSON.parse(req.responseText);
    } else {
      this.translations = {};
    }
  }

  async loadTranslations() {
    try {
      const res = await fetch(`assets/i18n/${this.currentLang}.json`);
      this.translations = await res.json();
    } catch {
      this.translations = {};
    }
  }
}