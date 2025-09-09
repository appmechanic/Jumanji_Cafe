import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule]
})
export class AuthFormsComponent implements OnInit {
  activeForm: 'login' | 'signup' | 'forgot' = 'login';
  showLoginPassword: boolean = false;
  showSignupPassword: boolean = false;
  showSignupConfirmPassword: boolean = false;
  langSub!: Subscription;
  authForms: any = {}; 

  loginEmail: string = '';
  loginPassword: string = '';
  loginError: string = '';

  signupFullName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  signupConfirmPassword: string = '';
  signupError: string = '';

  constructor(private i18n: I18nService, private router: Router) {}

  
  ngOnInit() {
    this.setFormFromUrl(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setFormFromUrl(event.urlAfterRedirects);
      }
    });
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.authForms = this.i18n.t('authForms');
  }

  onLanguageChanged() {
    this.loadTranslations();
  }
  redirectToProfile() {
    if (this.activeForm === 'login') {
      if (!this.loginEmail || !this.loginPassword) {
        this.loginError = 'Please fill in all fields.';
        return;
      }
      this.loginError = '';
      this.router.navigate(['/profile']);
    } else if (this.activeForm === 'signup') {
      if (!this.signupFullName || !this.signupEmail || !this.signupPassword || !this.signupConfirmPassword) {
        this.signupError = 'Please fill in all fields.';
        return;
      }
      if (this.signupPassword !== this.signupConfirmPassword) {
        this.signupError = 'Passwords do not match.';
        return;
      }
      this.signupError = '';
      this.router.navigate(['/profile']);
    }
  }

  setFormFromUrl(url: string) {
    if (url.includes('/signup')) {
      this.activeForm = 'signup';
    } else if (url.includes('/forgot-password')) {
      this.activeForm = 'forgot';
    } else {
      this.activeForm = 'login';
    }
  }

  showLogin() {
    this.router.navigate(['/login']);
  }
  showSignup() {
    this.router.navigate(['/signup']);
  }
  showForgot() {
    this.router.navigate(['/forgot-password']);
  }
  toggleLoginPassword() {
    this.showLoginPassword = !this.showLoginPassword;
  }
  toggleSignupPassword() {
    this.showSignupPassword = !this.showSignupPassword;
  }
  toggleSignupConfirmPassword() {
  this.showSignupConfirmPassword = !this.showSignupConfirmPassword;
}
}