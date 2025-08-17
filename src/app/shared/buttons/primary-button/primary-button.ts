import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  template: `
    <button class="btn btn-primary d-flex align-items-center">
      <i *ngIf="icon && iconPosition === 'left'" class="{{ icon }}" style="color: white; margin-right: 0.5rem;"></i>
      <ng-content></ng-content>
      <i *ngIf="icon && iconPosition === 'right'" class="{{ icon }}" style="color: white; margin-left: 0.5rem;"></i>
    </button>
  `,
  styleUrls: ['./primary-button.scss'],
  imports: [CommonModule]
})
export class PrimaryButtonComponent {
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
}