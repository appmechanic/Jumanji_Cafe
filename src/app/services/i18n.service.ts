import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private currentLang = 'en';
  private translations: any = {};

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
    // Synchronously load translations for initial language
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