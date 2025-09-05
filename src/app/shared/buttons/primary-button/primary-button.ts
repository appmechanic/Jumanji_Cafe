import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-primary-button',
  template: `
    <a *ngIf="routerLink" 
       [routerLink]="routerLink"
       class="btn btn-primary d-flex align-items-center justify-content-center rounded-3 fs-18 text-decoration-none"
       [ngClass]="[
         'border',
         bgGradient ? 'gradient-bg' : 'bg-white',
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
    
    <a *ngIf="href && !routerLink"
       [href]="href"
       [target]="target"
       class="btn btn-primary d-flex align-items-center justify-content-center rounded-3 fs-18 text-decoration-none"
       [ngClass]="[
         'border',
         bgGradient ? 'gradient-bg' : 'bg-white',
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
    
    <button *ngIf="!routerLink && !href"
            class="btn btn-primary d-flex align-items-center justify-content-center rounded-3 fs-18 "
            [ngClass]="[
              'border',
              bgGradient ? 'gradient-bg' : 'bg-white',
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
  styleUrls: ['./primary-button.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class PrimaryButtonComponent {
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() text?: string;  // Add this line
  @Input() bgGradient: boolean = true;
  @Input() textColorClass: string = 'text-white';
  @Input() routerLink?: string;      
  @Input() href?: string;      
  @Input() target?: string;
  @Output() buttonClick = new EventEmitter<void>();


  isMaterialIcon(icon?: string): boolean {
    return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
  }

  handleClick(): void {
    this.buttonClick.emit();
  }
}