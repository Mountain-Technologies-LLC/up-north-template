import { Component, input } from '@angular/core';
import { MainSocialAndContactSection, Schema, Section } from '../../../../../../schema';
import { GlobalService } from '../../../../../services/global.service';
import { FocusRemoverDirective } from '../../../../../shared/focus-remover.directive';
import { EditService } from '../../../../../services/edit.service';

@Component({
  selector: 'app-main-social-and-contact-edit',
  imports: [FocusRemoverDirective],
  templateUrl: './main-social-and-contact-edit.component.html',
})
export class MainSocialAndContactEditComponent {
  mainSocialAndContactSection = input<MainSocialAndContactSection>();

  constructor(
    private readonly editService: EditService,
    private readonly globalService: GlobalService
  ) { }

  insertAfter() {
    this.insert(true);
  }

  insertBefore() {
    this.insert();
  }

  changedSocialLink(event: Event) {
    this.editService.change(event, "mainSocialAndContactSection", "socialLink", this.mainSocialAndContactSection()?.sectionId!);
  }

  changedSocialName(event: Event) {
    this.editService.change(event, "mainSocialAndContactSection", "socialName", this.mainSocialAndContactSection()?.sectionId!);
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
}
