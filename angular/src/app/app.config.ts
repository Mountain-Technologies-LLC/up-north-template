import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Router, Routes, TitleStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TemplatePageTitleStrategy } from './TemplatePageTitleStrategy';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { environment } from '../environment/environment';
import { PageComponent } from './components/page/page.component';
import { Schema } from '../schema';
import { GlobalService } from './services/global.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [Router, GlobalService],
    },
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

export function initializeApp(router: Router, globalService: GlobalService): () => Promise<void> {
  if (true || "TODO: Use environment varialbes") {
    const data = require("../schema/demo.json");
    initializeAppData(data, routes, router, globalService);
    return () => Promise.resolve();
  }

  return () =>
    new Promise((resolve) =>
    {
      const schemaUrl = environment.schemaUrl && environment.schemaUrl.length > 0
        ? environment.schemaUrl
        : environment.demoSchemaUrl;

      const request = new Request(schemaUrl);

      setTimeout(async () => {
        await fetch(request)
          .then(response => response.json())
          .then(remoteConfig => {
            initializeAppData(remoteConfig, routes, router, globalService);
          })
          .catch(err => console.error('fetch-fail', err));

        resolve();
      });
    });
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
      routes.push({ path: p.link!, component: PageComponent, title: p.name });
    }

    if (p.pages != null) {
      p.pages.forEach(sp => routes.push({ path: sp.link!, component: PageComponent, title: sp.name }));
    }
  });

  return routes;
}

function initializeAppData(data: Schema, routes: Routes, router: Router, globalService: GlobalService) {
  const allRoutes = getRoutes(routes, data);

  router.resetConfig(allRoutes);
  globalService.InitializeSchema(data);
}
