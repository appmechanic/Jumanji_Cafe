import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItemsSubject = new BehaviorSubject<any[]>(this.getCartItemsFromLocalStorage());
    cartItems$ = this.cartItemsSubject.asObservable();

    private getCartItemsFromLocalStorage(): any[] {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    }

    updateCartItems(cartItems: any[]) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.cartItemsSubject.next(cartItems);
    }
}