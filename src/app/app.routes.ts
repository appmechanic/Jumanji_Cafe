import { Routes } from '@angular/router';
import { Home as Home } from './pages/home/home';
import { OurStory } from './pages/our-story/our-story';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'our-story', component: OurStory }
];
