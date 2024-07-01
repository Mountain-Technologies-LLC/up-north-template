import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TemplatePageTitleStrategy } from './TemplatePageTitleStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    },
  ]
};
