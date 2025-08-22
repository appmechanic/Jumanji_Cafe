import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorative-background',
  templateUrl: './bg-gradient.html',
  styleUrls: ['./bg-gradient.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BgGradientComponent {
  @Input() backgroundColor: string = '';     
  @Input() backgroundImage: string = '';     
  @Input() gradientClass: string = '';       
  @Input() rounded: boolean = true;           
 @Input() overlay: string = '';             
  @Input() padding: string = '3rem 1.5rem';  
  // Decorative shapes configuration
  @Input() shapes: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    width?: string;
    height?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    opacity?: string;
    rotate?: string;
    scale?: string;
    zIndex?: string;
    blur?: string;              // For glassmorphism effect
    customClass?: string;       // Additional custom class
  }[] = [];
}