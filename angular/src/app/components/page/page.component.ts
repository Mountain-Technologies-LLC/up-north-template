import { Component, inject } from '@angular/core';
import { PageService } from './page.service';
import { Router } from '@angular/router';
import { Section } from '../../../schema';
import { SectionsComponent } from "../sections/sections.component";
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    imports: [SectionsComponent]
})
export class PageComponent {
  private readonly url = inject(Router).routerState.snapshot.url;
  private page = inject(PageService).getPageByLink(this.url);

  pageId: string = this.page!.pageId;
  name: string = this.page?.name ?? "";
  sections: Section[] = this.page?.sections ?? [];

  constructor (private readonly globalService: GlobalService)
  {
    this.globalService.schema.subscribe({
      next: newValue => {
        const page = newValue.pages.find(x => x.pageId == this.pageId || x.pages?.some(x => x.pageId == this.pageId));

        if (page?.pageId != null && page?.pageId == this.pageId) {
          this.name = page.name;
          this.sections = page.sections!;
        }
        else {
          const subpage = page?.pages?.find(x => x.pageId == this.pageId);
          this.name = subpage?.name ?? "";
          this.sections = subpage?.sections ?? [];
        }
      }
    });
  }
}
