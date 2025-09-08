import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout-component.scss'],
  standalone: true,
  imports: [CommonModule, HeadingSectionComponent, RouterLink, FormsModule],
})
export class CheckoutComponent implements OnInit {

  cartItems: any[] = [];
  subtotal: number = 0;
  vat: number = 0;
  total: number = 0;
  selectedOrderType: string = 'pickup';

  fullName: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';

  showErrors: boolean = false; 

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.showErrors = false; // Ensure errors are hidden when the page loads
  }

  loadCartItems(): void {
    const storedCart = localStorage.getItem('cartItems');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price.match(/\d+/)[0]);
      return sum + (item.quantity * itemPrice);
    }, 0);
    this.vat = parseFloat((this.subtotal * 0.15).toFixed(2));
    this.total = parseFloat((this.subtotal + this.vat).toFixed(2));
  }

  getTotalItemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  selectOrderType(type: string): void {
    this.selectedOrderType = type;
  }

  isValidPhoneNumber(): boolean {
    return /^\d{10}$/.test(this.phoneNumber);
  }

  isValidEmail(): boolean {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.emailAddress);
  }

  confirmOrder(): void {
    let hasError = false;

    if (!this.fullName) {
        hasError = true;
    }
    if (!this.phoneNumber || !this.isValidPhoneNumber()) {
        hasError = true;
    }
    if (!this.emailAddress || !this.isValidEmail()) {
        hasError = true;
    }
    if (!this.selectedOrderType) {
        hasError = true;
    }

    if (hasError) {
        this.showErrors = true;
        return;
    }

    this.showErrors = false; 

    const orderId = Math.random().toString(36).substring(2, 14).toUpperCase();

    // Save to localStorage
    localStorage.setItem('orderDetails', JSON.stringify({
        orderId,
        orderType: this.selectedOrderType,
        totalAmount: this.total,
        contactNumber: this.phoneNumber,
        fullName: this.fullName,
        emailAddress: this.emailAddress,
        estimatedTime: '12-15 min',
    }));

    this.router.navigate(['/order-confirmed'], {
        state: {
            orderId,
            orderType: this.selectedOrderType,
            totalAmount: this.total,
            contactNumber: this.phoneNumber,
            estimatedTime: '12-15 min',
        },
    });
  }
}