import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface InfoStatBarItem {
  icon?: string;
  iconClass?: string;
  title: string ;
  titleColor?: string;
  text: string;
  textColor: string ;
}

@Component({
  selector: 'app-info-stat-bar',
  templateUrl: './info-stat-bar.html',
  styleUrls: ['./info-stat-bar.scss'],
  imports: [CommonModule],
})
export class InfoStatBar {
  @Input() stats: InfoStatBarItem[] = [];
  @Input() bgColor: string = '';
  @Input() shadow: boolean = false;

  get isBgColorClass(): boolean {
    return !!this.bgColor && /^[a-zA-Z]/.test(this.bgColor);
  }
}
