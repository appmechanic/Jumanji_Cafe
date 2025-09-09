import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
    imports: [CommonModule]
})
export class ProductDetailComponent implements OnInit {
    showSuccessMessage = false;
    @Input() productId: string = '';
    @Input() productData: any = {};

    @Output() closeModal = new EventEmitter<void>();

    currentImageIndex: number = 0;
    quantity: number = 1;
    activeTab: string = 'overview';

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.activeTab = 'overview';    }

    onClose() {
        this.closeModal.emit();
    }

    onBackdropClick(event: Event) {
        if (event.target === event.currentTarget) {
            this.onClose();
        }
    }

    changeImage(index: number) {
        this.currentImageIndex = index;
    }

    isMaterialIcon(icon?: string): boolean {
        return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    getReviewStars(): number[] {
        const rating = Math.floor(this.productData?.reviews?.averageRating || 0);
        return new Array(rating).fill(0);
    }

    getTotalPrice(): string {
        if (this.productData?.price) {
            const priceMatch = this.productData.price.match(/(\d+(?:\.\d+)?)/);
            if (priceMatch) {
                const priceNum = parseFloat(priceMatch[1]);
                const total = priceNum * this.quantity;
                return this.productData.price.replace(/\d+(?:\.\d+)?/, total.toString());
            }
        }
        return '';
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
        console.log('Tab changed to:', tab);
    }

    addToCart() {
    const cartItem = {
        id: this.productData?.id || this.productId,
        price: this.productData?.price,
        imageSrc: this.productData?.imageSrc,
        quantity: this.quantity,
        addedAt: new Date().toISOString()
    };

    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === cartItem.id);

    if (existingItemIndex > -1) {
        existingCart[existingItemIndex].quantity += this.quantity;
    } else {
        existingCart.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    this.cartService.updateCartItems(existingCart);

    this.showSuccessMessage = true;
    setTimeout(() => {
        this.showSuccessMessage = false;
    }, 3000);
    console.log('Item added to cart:', cartItem);
}

    addToWishlist() {
        const wishlistItem = {
            id: this.productData?.id || this.productId,
            title: this.productData?.title,
            price: this.productData?.price,
            imageSrc: this.productData?.imageSrc,
            addedAt: new Date().toISOString()
        };

        const existingWishlist = JSON.parse(localStorage.getItem('wishlistItems') || '[]');

        const existingItemIndex = existingWishlist.findIndex((item: any) => item.id === wishlistItem.id);

        if (existingItemIndex === -1) {
            existingWishlist.push(wishlistItem);
            localStorage.setItem('wishlistItems', JSON.stringify(existingWishlist));
            console.log('Item added to wishlist:', wishlistItem);
        } else {
            console.log('Item already in wishlist');
        }
    }
}