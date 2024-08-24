import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LicenseComponent } from './components/license/license.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageComponent } from './components/page/page.component';
import * as data from '../data.json';

export let routes: Routes = [
  { path: '', component: HomeComponent, title: "Home" },
  { path: 'license', component: LicenseComponent, title: "MIT License" },
  { path: 'sign-in', component: SignInComponent, title: "Sign In" }
];

data.pages.forEach(p => {
  if (p.sections != null) {
    routes.push({ path: p.link, component: PageComponent });
  }

  if (p.pages != null) {
    p.pages.forEach(sp => routes.push({ path: sp.link, component: PageComponent }));
  }
})
