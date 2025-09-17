import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../buttons/ghost-button/ghost-button';

@Component({
  selector: 'points-level-card',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, GhostButtonComponent],
  templateUrl: './points-level-card.html',
  styleUrls: ['./points-level-card.scss']
})
export class PointsLevelCardComponent {
  @Input() icon: string = 'bi-controller';
  @Input() iconBg: string = 'bg-secondary2 text-white';
  
  @Input() points: string = '';
  @Input() subtitle: string = '';
  @Input() cardBgColor: string = 'bg-white';
  @Input() shadow: boolean = true;

  // Level/progress
  @Input() currentLevel: string = '';
  @Input() currentLevelName: string = '';
  @Input() currentPoints: string = '';
  @Input() nextLevelPoints: string = '';
  @Input() pointsToNextLevelText: string = '';
  // Buttons
  @Input() primaryBtnText: string = '';
  @Input() ghostBtnText: string = '';
  @Input() iconPrimary: string = '';
  @Input() iconGhost: string = '';

  get progressPercent(): number {
    return Math.min(100, Math.round((parseInt(this.currentPoints) / parseInt(this.nextLevelPoints)) * 100));
  }

  get pointsToNextLevel(): number {
    return Math.max(0, parseInt(this.nextLevelPoints) - parseInt(this.currentPoints));
  }
}