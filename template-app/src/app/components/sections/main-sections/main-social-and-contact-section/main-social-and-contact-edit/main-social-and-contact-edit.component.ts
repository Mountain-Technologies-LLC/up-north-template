import { Component, input } from '@angular/core';
import { Data, MainSocialAndContactSection, Section } from '../../../../../../data';
import { GlobalService } from '../../../../../services/global.service';

@Component({
  selector: 'app-main-social-and-contact-edit',
  standalone: true,
  imports: [],
  templateUrl: './main-social-and-contact-edit.component.html',
})
export class MainSocialAndContactEditComponent {
  mainSocialAndContactSection = input<MainSocialAndContactSection>();
  sectionId = this.mainSocialAndContactSection()?.sectionId!;

  constructor(public globalService: GlobalService) { }

  insertBefore() {
    const data: Data = this.globalService.data.value;

    let pageHomeSections = data.pageHome.sections;

    console.log(pageHomeSections)

    pageHomeSections.push({
      mainSocialAndContactSection: {
        sectionId: crypto.randomUUID(),
        socialLink: "",
        socialName: "",
        subText: "",
        text: "",
      }
    });

    const pages = data.pages;

    const newValue: Data = {
      ...data,
      pageHome: { ...data.pageHome, sections: pageHomeSections },
      pages: pages,
    };

    console.log(2, newValue)

    this.globalService.data.next(newValue);
  }

  changedSocialLink(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "socialLink", this.sectionId);
  }

  changedSocialName(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "socialName", this.sectionId);
  }

  changedSubText(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "subText", this.sectionId);
  }

  changedText(event: Event) {
    this.changed(event, "mainSocialAndContactSection", "text", this.sectionId);
  }

  private changed(event: Event, sectionName: keyof Section, sectionPropertyName: string, sectionId: string) {
    const data: Data = this.globalService.data.value;

    const pageHomeSections = data.pageHome.sections.map(x => {
      if (x[sectionName]?.sectionId ?? "" == sectionId) {
        if (x.mainSocialAndContactSection != null) {
          x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLInputElement).value }
        }
      }

      return x;
    });

    const pages = data.pages.map(page => {
      page.sections = page.sections?.map(x => {
        if (x[sectionName]?.sectionId ?? "" == sectionId) {
          if (x.mainSocialAndContactSection != null) {
            x.mainSocialAndContactSection = { ...x.mainSocialAndContactSection, [sectionPropertyName]: (event.target as HTMLInputElement).value }
          }
        }

        return x;
      });

      page.pages = page.pages?.map(subPage => {
        subPage.sections = subPage.sections?.map(x => {
          if (x[sectionName]?.sectionId ?? "" == sectionId) {
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

    const newValue: Data = {
      ...data,
      pageHome: { ...data.pageHome, sections: pageHomeSections },
      pages: pages,
    };

    this.globalService.data.next(newValue);
  }
}
