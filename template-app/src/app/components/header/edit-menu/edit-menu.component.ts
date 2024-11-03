import { Component, input } from '@angular/core';
import { Schema } from '../../../../schema';
import { WebsiteTabComponent } from "./tabs/website-tab/website-tab.component";
import { PublishTabComponent } from './tabs/publish-tab/publish-tab.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-menu',
  standalone: true,
  imports: [NgClass, NgIf, PublishTabComponent, WebsiteTabComponent],
  templateUrl: './edit-menu.component.html',
})
export class EditMenuComponent {
  schema = input<Schema>();

  showWebsiteTab = true;
  clickWebsiteTab() {
    this.showWebsiteTab = true;
    this.showPublishTab = false;
  }

  showPublishTab = false;
  clickPublishTab() {
    this.showPublishTab = true;
    this.showWebsiteTab = false;
  }

  tabCss(isActive: boolean) {
    if (isActive) {
      return "!border-primary font-semibold";
    }
    else {
      return "!border-neutral-content hover:bg-neutral hover:brightness-150";
    }
  }
}
