import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  template: `
    <button class="btn btn-primary">
      <i *ngIf="iconLeft" [ngClass]="isMaterialIcon(iconLeft) ? 'material-icons' : iconLeft">
        {{ isMaterialIcon(iconLeft) ? iconLeft : '' }}
      </i>
      <ng-content></ng-content>
      <i *ngIf="iconRight" [ngClass]="isMaterialIcon(iconRight) ? 'material-icons' : iconRight">
        {{ isMaterialIcon(iconRight) ? iconRight : '' }}
      </i>
    </button>
  `,
  styleUrls: ['./primary-button.scss'],
  imports: [CommonModule]
})
export class PrimaryButtonComponent {
  @Input() iconLeft?: string;
  @Input() iconRight?: string;

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}