import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../../shared/heading-section/heading-section';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from '../../shared/buttons/primary-button/primary-button';
import { GhostButtonComponent } from '../../shared/buttons/ghost-button/ghost-button';
import { I18nService } from '../../i18n.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-my-cart',
    templateUrl: './my-cart.component.html',
    styleUrls: ['./my-cart.component.scss'],
    standalone: true,
    imports: [CommonModule, HeadingSectionComponent, PrimaryButtonComponent, GhostButtonComponent]
})
export class MyCartComponent implements OnInit {
    featuredItems: any[] = [];
    cartItems: any[] = [];
    subtotal: number = 0;
    vat: number = 0;
    total: number = 0;
    bonusThreshold: number = 300;
    langSub!: Subscription;
    myCart: any = {};

    constructor(private i18n: I18nService, private cartService: CartService) { }

    ngOnInit() {
        this.loadFeaturedItems();
        this.loadCartItems();
        this.loadTranslations();
        this.langSub = this.i18n.langChanged$.subscribe(() => {
            this.loadTranslations();
            this.loadFeaturedItems();
        });
    }
    loadFeaturedItems() {
        this.featuredItems = this.i18n.t('gameStore.featured-game.items') || [];
    }
    loadTranslations() {
        this.myCart = this.i18n.t('myCart');
    }

    onLanguageChanged() {
        this.loadTranslations();
    }

    loadCartItems() {
        const storedCart = localStorage.getItem('cartItems');
        this.cartItems = storedCart ? JSON.parse(storedCart) : [];
        this.calculateTotals();
    }
getItemDetails(id: string) {
    return this.featuredItems.find(item => item.id === id);
}
    calculateTotals() {
        this.subtotal = this.cartItems.reduce((sum, item) => {
            const itemPrice = parseFloat(item.price.match(/\d+/)[0]);
            return sum + (item.quantity * itemPrice);
        }, 0);
        this.vat = parseFloat((this.subtotal * 0.15).toFixed(2));
        this.total = parseFloat((this.subtotal + this.vat).toFixed(2));
    }

    removeItem(index: number) {
        this.cartItems.splice(index, 1);
        this.updateCartService();
        this.calculateTotals();
    }

    updateQuantity(index: number, change: number) {
        const item = this.cartItems[index];
        item.quantity += change;
        if (item.quantity < 1) item.quantity = 1;
        this.updateCartService();
        this.calculateTotals();
    }

    updateCartService() {
        this.cartService.updateCartItems(this.cartItems);
    }

    getItemTotal(item: any): number {
        const itemPrice = parseFloat(item.price.match(/\d+/)[0]);
        return parseFloat((item.quantity * itemPrice).toFixed(2));
    }

    getTotalItemCount(): number {
        return this.cartItems.reduce((count, item) => count + item.quantity, 0);
    }
}