import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'

import { HomeComponent } from './app/components/home/home.component';

bootstrapApplication(HomeComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
