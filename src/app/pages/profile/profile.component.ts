import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    email: 'admin@gmail.com',
    password: 'admin',
    fullName: 'Admin'
  };
  tabs = [
    { label: 'Overview', route: 'overview' },
    { label: 'Rewards', route: 'rewards' },
    { label: 'My Orders', route: 'orders' },
    { label: 'Events', route: 'events' },
    { label: 'Favorites', route: 'favorites' },
    { label: 'Settings', route: 'settings' }
  ];
  activeTab = 'overview';

  rewardsData = {
    currentPoints: 850,
    nextLevel: 3,
    pointsToNextLevel: 150,
    progressPercentage: 85
  };

  recentOrders = [
    { id: '#JUM8K9XL', details: 'Monopoly Session, Jungle Coffee, Adventure Snack Box', date: '2024-09-15 • 14:30', status: 'Completed', amount: '125.50' },
    { id: '#JUM7BW1JP', details: 'Chess Tournament, Herbal Tea, Board Game Pizza', date: '2024-09-13 • 16:00', status: 'Completed', amount: '98.75' },
    { id: '#JUM6K5M9N', details: 'Scrabble Night, Espresso Double, Victory Cake', date: '2024-09-12 • 14:45', status: 'Completed', amount: '87.25' }
  ];

  upcomingEvents = [
    { image: '/assets/cafe-event-img1.jpg', title: 'Chess Championship Finals', date: '2024-12-15', time: '18:00' },
    { image: '/assets/cafe-event-img1.jpg', title: 'Monopoly Marathon Weekend', date: '2024-12-22', time: '10:00' }
  ];

  constructor(private router: Router) {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.router.navigate(['/profile', tab]);
  }
}
