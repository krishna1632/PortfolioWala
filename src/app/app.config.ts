import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // Import provideAnimations
import { routes } from './app.routes';

// Swiper Support
import { register } from 'swiper/element/bundle';

// Swiper ko enable karna
register();

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(), // Add provideAnimations here
  ],
};
