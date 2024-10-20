import { Component, input } from '@angular/core';
import { MainSocialAndContactSection, Schema, Section } from '../../../../../../schema';
import { GlobalService } from '../../../../../services/global.service';
import { FocusRemoverDirective } from '../../../../../shared/focus-remover.directive';

@Component({
  selector: 'app-main-social-and-contact-edit',
  standalone: true,
  imports: [FocusRemoverDirective],
  templateUrl: './main-social-and-contact-edit.component.html',
})
export class MainSocialAndContactEditComponent {
  mainSocialAndContactSection = input<MainSocialAndContactSection>();

  constructor(private readonly globalService: GlobalService) { }

  insertAfter() {
    this.insert(true);
  }

  insertBefore() {
    this.insert();
  }

  changedSocialLink(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "socialLink", this.mainSocialAndContactSection()?.sectionId!);
  }

  changedSocialName(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "socialName", this.mainSocialAndContactSection()?.sectionId!);
  }

  changedSubText(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "subText", this.mainSocialAndContactSection()?.sectionId!);
  }

  changedText(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "text", this.mainSocialAndContactSection()?.sectionId!);
  }

  delete() {
    const schema: Schema = this.globalService.schema.value;
    const sectionId = this.mainSocialAndContactSection()?.sectionId!;

    let pageHomeSections = schema.pageHome.sections;
    var index = pageHomeSections.findIndex(x => x.mainSocialAndContactSection?.sectionId == sectionId);

    pageHomeSections.splice(index, 1);

    const pages = schema.pages;

    const newValue: Schema = {
      ...schema,
      pageHome: { ...schema.pageHome, sections: pageHomeSections },
      pages: pages,
    };

    this.globalService.schema.next(newValue);
  }

  private insert(isAfter: boolean = false) {
    const schema: Schema = this.globalService.schema.value;
    const sectionContextId = this.mainSocialAndContactSection()?.sectionId!;

    let pageHomeSections = schema.pageHome.sections;
    var insertPos = pageHomeSections.findIndex(x => x.mainSocialAndContactSection?.sectionId == sectionContextId) + (isAfter ? 1 : 0);

    const newSection: Section = {
      mainSocialAndContactSection: {
        sectionId: crypto.randomUUID(),
        socialLink: "https://mountaintechnologiesllc.com",
        socialName: "?????",
        subText: "Sub Text",
        text: "Main Text",
      }
    };

    pageHomeSections.splice(insertPos, 0, newSection);

    const pages = schema.pages;

    const newValue: Schema = {
      ...schema,
      pageHome: { ...schema.pageHome, sections: pageHomeSections },
      pages: pages,
    };

    this.globalService.schema.next(newValue);
  }

  private changed(event: Event, sectionName: keyof Section, sectionPropertyName: string, sectionId: string) {
    const schema: Schema = this.globalService.schema.value;

    const pageHomeSections = schema.pageHome.sections.map(x => {
      if (x[sectionName]!= null && x[sectionName]?.sectionId === sectionId) {
        if (x.mainSocialAndContactSection != null) {
          x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLInputElement).value }
        }
      }

      return x;
    });

    const pages = schema.pages.map(page => {
      page.sections = page.sections?.map(x => {
        if (x[sectionName]!= null && x[sectionName]?.sectionId === sectionId) {
          if (x.mainSocialAndContactSection != null) {
            x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLInputElement).value }
          }
        }

        return x;
      });

      page.pages = page.pages?.map(subPage => {
        subPage.sections = subPage.sections?.map(x => {
          if (x[sectionName]!= null && x[sectionName]?.sectionId === sectionId) {
            if (x.mainSocialAndContactSection != null) {
              x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLInputElement).value }
            }
          }

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
}
