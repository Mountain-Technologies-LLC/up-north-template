import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from './home.service';
import { Section } from '../../../data';
import { SectionsComponent } from "../sections/sections.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [RouterLink, SectionsComponent]
})
export class HomeComponent {
  private readonly homeService = inject(HomeService);

  readonly sections: Section[] = this.homeService.getHomeData().sections;
}
