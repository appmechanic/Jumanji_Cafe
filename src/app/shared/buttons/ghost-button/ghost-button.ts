import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ghost-button',
  template: `
    <a *ngIf="routerLink" 
       [routerLink]="routerLink"
       class="btn btn-ghost rounded-3 d-flex align-items-center justify-content-center fs-18 text-decoration-none"
       [ngClass]="[
         'border',
         bgWhite ? 'bg-white' : '',
         bgWhite ? 'border-primary' : 'border-white-custom',
         textColorClass
       ]">
      <i *ngIf="iconLeft" [ngClass]="isMaterialIcon(iconLeft) ? 'material-icons me-2' : 'bi ' + iconLeft + ' me-2'">
        {{ isMaterialIcon(iconLeft) ? iconLeft : '' }}
      </i>
      <span *ngIf="text">{{ text }}</span>
      <ng-content *ngIf="!text"></ng-content>
      <i *ngIf="iconRight" [ngClass]="isMaterialIcon(iconRight) ? 'material-icons ms-2' : 'bi ' + iconRight + ' ms-2'">
        {{ isMaterialIcon(iconRight) ? iconRight : '' }}
      </i>
    </a>
    
    <button *ngIf="!routerLink"
            class="btn btn-ghost rounded-3 d-flex align-items-center justify-content-center fs-18"
            [ngClass]="[
              'border',
              bgWhite ? 'bg-white' : '',
              bgWhite ? 'border-primary' : 'border-white-custom',
              textColorClass
            ]"
            (click)="handleClick()">
      <i *ngIf="iconLeft" [ngClass]="isMaterialIcon(iconLeft) ? 'material-icons me-2' : 'bi ' + iconLeft + ' me-2'">
        {{ isMaterialIcon(iconLeft) ? iconLeft : '' }}
      </i>
      <span *ngIf="text">{{ text }}</span>
      <ng-content *ngIf="!text"></ng-content>
      <i *ngIf="iconRight" [ngClass]="isMaterialIcon(iconRight) ? 'material-icons ms-2' : 'bi ' + iconRight + ' ms-2'">
        {{ isMaterialIcon(iconRight) ? iconRight : '' }}
      </i>
    </button>
  `,
  styleUrls: ['./ghost-button.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class GhostButtonComponent {
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() text?: string;
  @Input() bgWhite: boolean = true;
  @Input() textColorClass: string = 'text-primary';
  @Input() routerLink?: string;
  @Output() buttonClick = new EventEmitter<void>();

  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }

  handleClick(): void {
    this.buttonClick.emit();
  }
}