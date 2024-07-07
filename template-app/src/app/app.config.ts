import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { TitleStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TemplatePageTitleStrategy } from './TemplatePageTitleStrategy';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideClientHydration(),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    },
    {
        provide: APP_BASE_HREF,
        useFactory: getBaseHref,
        deps: [PlatformLocation]
    },
  ]
};

export function getBaseHref(platformLocation: PlatformLocation): string {
  const baseHref = platformLocation.getBaseHrefFromDOM();

  if (baseHref.length <= 1) {
    return "";
  }

  return baseHref;
}
