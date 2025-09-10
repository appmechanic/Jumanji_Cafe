import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';


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

  user = {
    email: 'admin@gmail.com',
    password: 'admin',
    fullName: 'Admin',
    firstName: 'Admin',
    lastName: 'User',
    avatar: '/assets/testimonial-img1.jpg',
    phoneNumber: '+1 (555) 123-4567',
    currentLevel: 2,
    currentLevelTitle: 'Game Explorer',
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
    {  pointsRequired: 100 },
    {  pointsRequired: 200},
    {  pointsRequired: 150 },
    {  pointsRequired: 500}
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
    { image: '/assets/cafe-event-img1.jpg',  date: '2024-12-15', time: '18:00',  },
    { image: '/assets/cafe-event-img1.jpg',  date: '2024-12-22', time: '10:00',  },
  ];

  favoriteGames = [
    { image: '/assets/cafe-game-img1.jpg', title: 'Catan', category: 'Strategy' },
    { image: '/assets/cafe-game-img1.jpg', title: 'Ticket to Ride', category: 'Family' },
    { image: '/assets/cafe-game-img1.jpg', title: 'Pandemic', category: 'Cooperative' },
    { image: '/assets/cafe-game-img1.jpg', title: 'Carcassonne', category: 'Tile Placement' },
  ];

  settingTabs = [
    {
      title: 'Edit Profile Information',
      subtitle: 'Update your name, email, and avatar',
      iconClass: 'bi bi-person-circle bg-primary2'
    },
    {
      title: 'Change Password',
      subtitle: 'Update your account password',
      iconClass: 'bi bi-key bg-orange text-orange'
    },
    {
      title: 'Notification Preferences',
      subtitle: 'Manage your notification settings',
      iconClass: 'bi bi-bell bg-orange text-orange'
    },
    {
      title: 'Privacy & Security',
      subtitle: 'Manage your privacy settings',
      iconClass: 'bi bi-shield-lock bg-primary2'
    }
  ];

  passwordRequirements = [
    'At least 8 characters',
    'Upper and lowercase letters',
    'At least one number'
  ];

  notificationPreferences = {
    email: {
      title: 'Email Notifications',
      icon: 'bi bi-envelope bg-success-subtle text-success',
      preferences: [
        { label: 'Order Updates', enabled: true },
        { label: 'Event Reminders', enabled: false },
        { label: 'Weekly Newsletter', enabled: true },
        { label: 'Promotions & Offers', enabled: true }
      ]
    },
    push: {
      title: 'Push Notifications',
      icon: 'bi bi-bell bg-info-subtle text-info',
      preferences: [
        { label: 'Order Updates', enabled: true },
        { label: 'Event Reminders', enabled: true },
        { label: 'Promotions & Offers', enabled: false },
        { label: 'Game Recommendations', enabled: true }
      ]
    },
    sms: {
      title: 'SMS Notifications',
      icon: 'bi bi-chat-dots bg-orange text-orange',
      preferences: [
        { label: 'Order Updates', enabled: false },
        { label: 'Event Reminders', enabled: true }
      ]
    },
    quietHours: {
      title: 'Quiet Hours',
      icon: 'bi bi-moon bg-primary2',
      description: 'No notifications during these hours',
      enabled: true,
      from: '22:00',
      to: '08:00'
    }
  };

  privacySecurity = {
    privacySettings: {
      title: 'Privacy Settings',
      icon: 'bi bi-shield-lock bg-info-subtle text-info',
      options: {
        title: 'Profile Visibility',
        values: [
          { label: 'Public' },
          { label: 'Private' }
        ]
      },
      preferences: [
        { label: 'Show Online Status', enabled: true },
        { label: 'Share Game Activity', enabled: true },
        { label: 'Allow Friend Requests', enabled: true }
      ]
    },
    securitySettings: {
      title: 'Security Settings',
      icon: 'bi bi-shield-lock bg-orange text-orange',
      preferences: [
        { label: 'Two-Factor Authentication', enabled: false, text: 'Add extra security to your account' },
      ],
      options: {
        text: 'Auto-logout (minutes)',
        values: [
          { label: '5' },
          { label: '10' },
          { label: '15' },
          { label: '30' },
          { label: '60' }
        ]
      }
    },
    marketingSettings: {
      title: 'Marketing Preferences',
      icon: 'bi bi-layers bg-success-subtle text-success',
      preferences: [
        { label: 'Share Analytics Data', enabled: true, text: 'Help improve our services' },
        { label: 'Marketing Emails', enabled: false },
      ]
    }
  };

  constructor(private router: Router, private i18n: I18nService) { }

  ngOnInit(): void {
    this.loadTranslations();
    this.langSub = this.i18n.langChanged$.subscribe(() => {
      this.loadTranslations();
    });
  }
  loadTranslations() {
    this.profile = this.i18n.t('profile');
  }

  onLanguageChanged() {
    this.loadTranslations();
  }
  gettabs(): any[] {
    return this.i18n.t('profile.tabs') as any[] || this.tabs;
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
    const stats = this.i18n.t('profile.overview.recentOrders') as any[];
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
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate(['/profile', tab]);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }
}