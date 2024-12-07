import { Component, input } from '@angular/core';
import { MainSocialAndContactSection } from '../../../../../schema';
import { RouterLink } from '@angular/router';
import { GlobalService } from '../../../../services/global.service';
import { EditService } from '../../../../services/edit.service';

// https://codepen.io/GiorgioMalvone/pen/MWJwNV
// https://stackoverflow.com/questions/53130362/angular-and-contenteditable

@Component({
  selector: 'app-main-social-and-contact-section',
  imports: [RouterLink],
  templateUrl: './main-social-and-contact-section.component.html',
})
export class MainSocialAndContactSectionComponent {
  mainSocialAndContactSection = input<MainSocialAndContactSection>();

  constructor(
    private readonly editService: EditService,
    private readonly globalService: GlobalService
  ) { }

  editing: boolean = this.globalService.editing.value;

  onTextChange(event: FocusEvent) {
    this.editService.change(event, "mainSocialAndContactSection", "text", this.mainSocialAndContactSection()?.sectionId!);
  }

  onSubTextChange(event: FocusEvent) {
    this.editService.change(event, "mainSocialAndContactSection", "subText", this.mainSocialAndContactSection()?.sectionId!);
  }
}
