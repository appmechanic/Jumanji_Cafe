import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';



type User = {
  email: string;
  password: string;
  avatar: string;
  phoneNumber: string;
  birthday: string;
};

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, PrimaryButtonComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  langSub!: Subscription;
  profile: any = {};

  user: User = {
    email: 'admin@gmail.com',
    password: 'admin',
    avatar: '/assets/testimonial-img1.jpg',
    phoneNumber: '+1 (555) 123-4567',
    birthday: '',
  };

  activeModal: number | null = null;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  openModal(index: number) {
    console.log('Modal triggered for index:', index);
    this.activeModal = index;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.activeModal = null;
    document.body.classList.remove('modal-open');
  }
  tabs = [
    { label: 'Overview', route: 'overview' },
    { label: 'Rewards', route: 'rewards' },
    { label: 'My Orders', route: 'orders' },
    { label: 'Events', route: 'events' },
    { label: 'Favorites', route: 'favorites' },
    { label: 'Settings', route: 'settings' }
  ];

  activeTab = 'overview';

  rewardsCards = [
    {
      icon: 'bi-star',
    },
    {
      icon: 'bi-trophy',
    },
  ];

  rewardsData = {
    currentPoints: 850,
    nextLevel: 3,
    pointsToNextLevel: 150,
    progressPercentage: 85
  };

  rewardsStatus = [
    {
      icon: 'bi bi-trophy'
    },
    {
      icon: 'bi bi-disc'
    },
    {
      icon: 'bi bi-gift'
    }
  ];
  availableRewards = [
    { pointsRequired: 100 },
    { pointsRequired: 200 },
    { pointsRequired: 150 },
    { pointsRequired: 500 }
  ];

  recentOrders = [
    {
      id: '#JUM8K9XL',
      date: '2024-09-15 ',
      time: '14:30',
      amount: '125.50'
    },
    {
      id: '#JUM7BW1JP',
      date: '2024-09-13 ',
      time: '16:00',
      amount: '98.75'
    },
    {
      id: '#JUM6K5M9N',
      date: '2024-09-12 ',
      time: '14:45',
      amount: '87.25'
    }
  ];

  upcomingEvents = [
    { image: '/assets/cafe-event-img1.jpg', date: '2024-12-15', time: '18:00', },
    { image: '/assets/cafe-event-img1.jpg', date: '2024-12-22', time: '10:00', },
  ];

  favoriteGames = [
    { image: '/assets/cafe-game-img1.jpg' },
    { image: '/assets/cafe-game-img1.jpg' },
    { image: '/assets/cafe-game-img1.jpg' },
    { image: '/assets/cafe-game-img1.jpg' },
  ];

  settingTabs = [
    {
      iconClass: 'bi bi-person-circle bg-primary2'
    },
    {
      iconClass: 'bi bi-key bg-orange text-orange'
    },
    {
      iconClass: 'bi bi-bell bg-orange text-orange'
    },
    {
      iconClass: 'bi bi-shield-lock bg-primary2'
    }
  ];

  editProfileLabel = {
    title: 'Edit Profile',
    text: 'Click camera to change photo',
    saveBtn: 'Save Changes',
    cancelBtn: 'Cancel',
    avatar: 'user.avatar',
    fields: [
      { id: 'email', label: 'Email', type: 'email' },
      { id: 'password', label: 'Password', type: 'password' },
      { id: 'phoneNumber', label: 'Phone', type: 'text' },
      { id: 'birthday', label: 'Birthday', type: 'date' }
    ] as { id: keyof User; label: string; type: string }[]
  };

  notificationemail = {
    icon: 'bi bi-envelope bg-success-subtle text-success',
    title: '',
    preferences: [
      { enabled: true },
      { enabled: false },
      { enabled: true },
      { enabled: true }
    ]
  }
  notificationpush = {
    icon: 'bi bi-bell bg-info-subtle text-info',
    title: '',
    preferences: [
      { enabled: true },
      { enabled: true },
      { enabled: false },
      { enabled: true }
    ]
  }
  notificationsms = {
    icon: 'bi bi-chat-dots bg-orange text-orange',
    title: '',
    preferences: [
      { enabled: false },
      { enabled: true }
    ]
  }
  notificationquietHours = {
    icon: 'bi bi-moon bg-primary2',
    enabled: true,
    from: '22:00',
    to: '08:00'
  }

  privacySettings = {
    icon: 'bi bi-shield-lock bg-info-subtle text-info',
    preferences: [
      { enabled: true },
      { enabled: true },
      { enabled: true }
    ]
  }
  securitySettings = {
    icon: 'bi bi-shield-lock bg-orange text-orange',
    preferences: [
      { enabled: false, },
    ],
    options: {
      values: [
        { label: '5' },
        { label: '10' },
        { label: '15' },
        { label: '30' },
        { label: '60' }
      ]
    }
  }
  marketingSettings = {
    icon: 'bi bi-layers bg-success-subtle text-success',
    preferences: [
      { enabled: true },
      { enabled: false },
    ]
  }
  leftChevronRight: string = 'bi bi-chevron-right';

  constructor(private router: Router, private i18n: I18nService) { }

  ngOnInit(): void {
    this.updateleftChevronRight();
    this.notificationemail.title = this.i18n.t('profile.notificationemail.title');
    this.notificationpush.title = this.i18n.t('profile.notificationpush.title');
    this.notificationsms.title = this.i18n.t('profile.notificationsms.title');
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
      this.updateleftChevronRight();
    });
  }
  updateleftChevronRight(): void {
    const currentLang = this.i18n.getCurrentLang();
    this.leftChevronRight = currentLang === 'ar' ? 'bi bi-chevron-left' : 'bi bi-chevron-right';
  }
  loadTranslations() {
    this.profile = this.i18n.t('profile');
  }

  onLanguageChanged() {
    this.loadTranslations();
  }

  getrewardsCards(): any[] {
    const stats = this.i18n.t('profile.overview.reward.cards') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.rewardsCards[idx]
    }));
  }
  getrewardsData(): any {
    const stats = this.i18n.t('profile.overview.rewardsData') as any;
    return {
      ...stats,
      ...this.rewardsData
    };
  }
  getrecentOrders(): any[] {
    const stats = this.i18n.t('profile.overview.recentOrders.orders') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.recentOrders[idx]
    }));
  }
  getupcomingEvents(): any[] {
    const stats = this.i18n.t('profile.overview.upcomingEvents.cards') as any[];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.upcomingEvents[idx]
    }));
  }
  getrewardsStatus(): any[] {
    const stats = this.i18n.t('profile.rewardsStatus.cards') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.rewardsStatus[idx]
    }));
  }
  getavailableRewards(): any[] {
    const stats = this.i18n.t('profile.rewardsStatus.availableRewards.cards') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.availableRewards[idx]
    }));
  }
  getfavoriteGames(): any[] {
    const stats = this.i18n.t('profile.favoriteGames.cards') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.favoriteGames[idx]
    }));
  }
  getsettingTabs(): any[] {
    const stats = this.i18n.t('profile.settingTabs.tabs') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.settingTabs[idx]
    }));
  }
  getpasswordRequirements(): string[] {
    const requirements = this.i18n.t('profile.changePassword.requirements.list') as string[] || [];
    return requirements;
  }

  getnotificationemail(): any[] {
    const stats = this.i18n.t('profile.notificationemail.preferences') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.notificationemail.preferences[idx]
    }));
  }
  getnotificationpush(): any[] {
    const stats = this.i18n.t('profile.notificationpush.preferences') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.notificationpush.preferences[idx]
    }));
  }
  getnotificationsms(): any[] {
    const stats = this.i18n.t('profile.notificationsms.preferences') as any[] || [];
    return stats.map((stat: any, idx: number) => ({
      ...stat,
      ...this.notificationsms.preferences[idx]
    }));
  }
  getnotificationquietHours(): any {
    const stats = this.i18n.t('profile.notificationquietHours') || {};
    return {
      ...stats,
      ...this.notificationquietHours
    };
  }
  gettabs(): any[] {
    const translatedTabs = this.i18n.t('profile.tabs') as any[] || [];
    return translatedTabs.map((tab: any, idx: number) => ({
      ...tab,
      route: this.tabs[idx]?.route
    }));
  }
  getusers(): any {
    const stats = this.i18n.t('profile.user') || {};
    return {
      ...this.user,
      ...stats
    };
  }

  getprivacySettings(): any {
    const stats = this.i18n.t('profile.privacySettings') || {};
    return {
      ...stats,
      ...this.privacySettings,
      preferences: (stats.preferences || []).map((pref: any, idx: number) => ({
        ...pref,
        ...this.privacySettings.preferences[idx]
      })),
      options: {
        ...stats.options,
        values: (stats.options?.values || []).map((option: any) => ({
          ...option
        }))
      }
    };
  }
  getsecuritySettings(): any {
    const stats = this.i18n.t('profile.securitySettings') || {};
    return {
      ...stats,
      ...this.securitySettings,
      preferences: (stats.preferences || []).map((pref: any, idx: number) => ({
        ...pref,
        ...this.securitySettings.preferences[idx]
      })),
      options: {
        ...stats.options,
        values: (this.securitySettings.options.values || []).map((option: any) => ({
          ...option
        }))
      }
    };
  }
  getmarketingSettings(): any {
    const stats = this.i18n.t('profile.marketingSettings') || {};
    return {
      ...stats,
      ...this.marketingSettings,
      preferences: (stats.preferences || []).map((pref: any, idx: number) => ({
        ...pref,
        ...this.marketingSettings.preferences[idx]
      }))
    };
  }
  getprivacyAndSecurity(): any {
    const stats = this.i18n.t('profile.privacyAndSecurity') || {}; // Fetch translation data
    return {
      ...stats // Return the translation data
    };
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate(['/profile', tab]);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }
}