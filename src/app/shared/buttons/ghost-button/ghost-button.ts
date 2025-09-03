import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ghost-button',
  template: `
    <button class="btn btn-ghost rounded-3 d-flex align-items-center justify-content-center fs-18"
      [ngClass]="[
        'border',
        bgWhite ? 'bg-white' : '',
        bgWhite ? 'border-primary' : 'border-white-custom',
        textColorClass
      ]">
      <i *ngIf="iconLeft" [ngClass]="isMaterialIcon(iconLeft) ? 'material-icons' : iconLeft">
        {{ isMaterialIcon(iconLeft) ? iconLeft : '' }}
      </i>
      <ng-content></ng-content>
      <i *ngIf="iconRight" [ngClass]="isMaterialIcon(iconRight) ? 'material-icons' : iconRight">
        {{ isMaterialIcon(iconRight) ? iconRight : '' }}
      </i>
    </button>
  `,
  styleUrls: ['./ghost-button.scss'],
  imports: [CommonModule]
})
export class GhostButtonComponent {
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() bgWhite: boolean = true;
  @Input() textColorClass: string = 'text-primary';

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }
}