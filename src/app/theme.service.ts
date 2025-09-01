import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = false;

  constructor() {
    const saved = localStorage.getItem('darkMode');
    this.darkMode = saved === 'true';
    this.applyTheme();

    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('darkMode');
    });
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', String(this.darkMode));
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}