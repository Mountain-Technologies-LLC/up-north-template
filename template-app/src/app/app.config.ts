import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TemplatePageTitleStrategy } from './TemplatePageTitleStrategy';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { Schema } from '../schema';
import { PageComponent } from './components/page/page.component';

export function getConfig(remoteConfig: Schema): ApplicationConfig {
  const allRoutes = getRoutes(routes, remoteConfig);

  const appConfig: ApplicationConfig = {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(
        allRoutes,
        withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      ),
      provideClientHydration(),
      {
        provide: TitleStrategy,
        useClass: TemplatePageTitleStrategy,
      },
      {
          provide: APP_BASE_HREF,
          useFactory: getBaseHref,
          deps: [PlatformLocation]
      },
    ]
  };

  return appConfig;
}

export function getBaseHref(platformLocation: PlatformLocation): string {
  const baseHref = platformLocation.getBaseHrefFromDOM();

  if (baseHref.length <= 1) {
    return "";
  }

  return baseHref;
}

export function getRoutes(routes: Routes, config: Schema): Routes {
  config.pages.forEach(p => {
    if (p.sections != null) {
      routes.push({ path: p.link!, component: PageComponent });
    }

    if (p.pages != null) {
      p.pages.forEach(sp => routes.push({ path: sp.link!, component: PageComponent }));
    }
  });

  return routes;
}
