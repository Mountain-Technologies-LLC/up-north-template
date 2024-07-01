import { Component } from '@angular/core';

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [],
  templateUrl: './license.component.html',
  styleUrl: './license.component.scss'
})
export class LicenseComponent {
  currentYear: number = new Date().getFullYear();
}
