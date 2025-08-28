import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Home as Home } from './app/pages/home/home';
import { OurStory } from './app/pages/our-story/our-story';

const routes = [
  { path: '', component: Home },
  { path: 'our-story', component: OurStory }
];

bootstrapApplication(App, {
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
  ],
  ...Object.fromEntries(Object.entries(appConfig).filter(([key]) => key !== 'providers')),
}).catch(err => console.error(err));