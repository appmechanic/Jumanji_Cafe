import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { OurStory } from './pages/our-story/our-story';
import { CafeMenu } from './pages/cafe-menu/cafe-menu';
import { ContactUs } from './pages/contact-us/contact-us';
import { B2BServices } from './pages/b2b-servcies/b2b-services';
import { BoardGameStore } from './pages/board-game-store/board-game-store';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'our-story', component: OurStory },
  { path: 'cafe-menu', component: CafeMenu },
  { path: 'board-game-store', component: BoardGameStore },
  { path: 'contact-us', component: ContactUs },
  { path: 'b2b-services', component: B2BServices }
];
