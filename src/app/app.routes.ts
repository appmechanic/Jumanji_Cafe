import { Routes } from '@angular/router';
import { AuthFormsComponent } from './pages/auth-forms/auth-forms.component';
import { Home } from './pages/home/home';
import { OurStory } from './pages/our-story/our-story';
import { CafeMenu } from './pages/cafe-menu/cafe-menu';
import { ContactUs } from './pages/contact-us/contact-us';
import { B2BServices } from './pages/b2b-servcies/b2b-services';
import { BoardGameStore } from './pages/board-game-store/board-game-store';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderConfirmedComponent } from './pages/order-confirmed/order-confirmed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Rewards } from './pages/rewards/rewards';
import { EventNews } from './pages/event-news/event-news';

export const routes: Routes = [
  { path: 'login', component: AuthFormsComponent },
  { path: 'signup', component: AuthFormsComponent },
  { path: 'forgot-password', component: AuthFormsComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: ProfileComponent },
      { path: 'rewards', component: ProfileComponent },
      { path: 'orders', component: ProfileComponent },
      { path: 'events', component: ProfileComponent },
      { path: 'favorites', component: ProfileComponent },
      { path: 'settings', component: ProfileComponent }
    ]
  },
  { path: '', component: Home },
  { path: 'our-story', component: OurStory },
  { path: 'cafe-menu', component: CafeMenu },
  { path: 'board-game-store', component: BoardGameStore },
  { path: 'contact-us', component: ContactUs },
  { path: 'b2b-services', component: B2BServices },
  { path: 'cart', component: MyCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmed', component: OrderConfirmedComponent },
  { path: 'reward', component: Rewards },
  { path: 'events-news', component: EventNews },
];