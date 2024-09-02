import { Component, inject } from '@angular/core';
import { PageService } from './page.service';
import { Router } from '@angular/router';
import { Section } from '../../../data';
import { SectionsComponent } from "../sections/sections.component";

@Component({
    selector: 'app-page',
    standalone: true,
    templateUrl: './page.component.html',
    imports: [SectionsComponent]
})
export class PageComponent {
  private readonly url = inject(Router).routerState.snapshot.url;
  private page = inject(PageService).getPageByLink(this.url);

  name: string = this.page?.name ?? "";
  sections: Section[] = this.page?.sections ?? [];
}
