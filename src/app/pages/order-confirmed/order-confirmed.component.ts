import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.scss'],
  standalone: true,
  imports: [CommonModule, HeadingSectionComponent, PrimaryButtonComponent, GhostButtonComponent],
})
export class OrderConfirmedComponent {

  orderId: string = '';
  orderType: string = '';
  totalAmount: number = 0;
  contactNumber: string = '';
  estimatedTime: string = '';

  constructor() {
    if (!localStorage.getItem('orderConfirmedReloaded')) {
      localStorage.setItem('orderConfirmedReloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('orderConfirmedReloaded');
    }
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails') || '{}');
    this.orderId = orderDetails.orderId || '';
    this.orderType = orderDetails.orderType || '';
    this.totalAmount = orderDetails.totalAmount || 0;
    this.contactNumber = orderDetails.contactNumber || '';
    this.estimatedTime = orderDetails.estimatedTime || '';
  }
}