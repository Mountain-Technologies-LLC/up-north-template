import { Injectable } from '@angular/core';
import { Schema, Section } from '../../schema';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private readonly globalService: GlobalService) { }

  public change(event: Event, sectionName: keyof Section, sectionPropertyName: string, sectionId: string) {
    const schema: Schema = this.globalService.schema.value;

    const pageHomeSections = schema.pageHome.sections.map(x => {
      this.changeSection(x, event, sectionName, sectionPropertyName, sectionId);

      return x;
    });

    const pages = schema.pages.map(page => {
      page.sections = page.sections?.map(x => {
        this.changeSection(x, event, sectionName, sectionPropertyName, sectionId);

        return x;
      });

      page.pages = page.pages?.map(subPage => {
        subPage.sections = subPage.sections?.map(x => {
          this.changeSection(x, event, sectionName, sectionPropertyName, sectionId);

          return x;
        });

        return subPage;
      });

      return page;
    });

    const newValue: Schema = {
      ...schema,
      pageHome: { ...schema.pageHome, sections: pageHomeSections },
      pages: pages,
    };

    this.globalService.schema.next(newValue);
  }

  private changeSection(x: Section, event: Event, sectionName: keyof Section, sectionPropertyName: string, sectionId: string) {
    if (x[sectionName]!= null && x[sectionName]?.sectionId === sectionId) {
      if (x.mainSocialAndContactSection != null) {
        if (event.target instanceof HTMLHeadingElement || event.target instanceof HTMLParagraphElement) {
          x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLElement).innerHTML.trim() }
        }
        else if (event.target instanceof HTMLInputElement) {
          x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLInputElement).value.trim() }
        }
        else {
          console.error("Section was not changed");
        }
      }
    }
  }
}
