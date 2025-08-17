import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ghost-button',
  template: `
    <button class="btn btn-ghost">
      <i *ngIf="icon" [ngClass]="isMaterialIcon ? 'material-icons' : icon" style="margin-right: 0.5rem;">
        {{ isMaterialIcon ? icon : '' }}
      </i>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./ghost-button.scss'],
  imports: [CommonModule]
})
export class GhostButtonComponent {
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';

  get isMaterialIcon(): boolean {
    return !this.icon?.includes('bi-') && !this.icon?.includes('fa-');
  }
}
