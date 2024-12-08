import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LicenseComponent } from './components/license/license.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

export let routes: Routes = [
  { path: '', component: HomeComponent, title: "Home" },
  { path: 'license', component: LicenseComponent, title: "MIT License" },
  { path: 'sign-in', component: SignInComponent, title: "Sign In" }
];
