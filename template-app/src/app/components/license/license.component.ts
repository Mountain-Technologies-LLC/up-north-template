import { Component } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
})
export class LicenseComponent {
  currentYear: number = new Date().getFullYear();
}
