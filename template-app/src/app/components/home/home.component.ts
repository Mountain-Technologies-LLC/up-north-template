import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from './home.service';
import { Section } from '../../../schema';
import { SectionsComponent } from "../sections/sections.component";
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [RouterLink, SectionsComponent]
})
export class HomeComponent {
  private readonly homeService = inject(HomeService);

  sections: Section[] = this.homeService.getHomeData().sections;

  constructor (private readonly globalService: GlobalService)
  {
    this.globalService.schema.subscribe({
      next: newValue => {
        this.sections = newValue.pageHome.sections;
      }
    });
  }
}
