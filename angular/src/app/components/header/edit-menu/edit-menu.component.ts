import { Component, input } from '@angular/core';
import { Schema } from '../../../../schema';
import { WebsiteTabComponent } from "./tabs/website-tab/website-tab.component";
import { PublishTabComponent } from './tabs/publish-tab/publish-tab.component';
import { NgClass, NgIf } from '@angular/common';
import { PagesTabComponent } from './tabs/pages-tab/pages-tab.component';

@Component({
  selector: 'app-edit-menu',
  imports: [NgClass, NgIf, PagesTabComponent, PublishTabComponent, WebsiteTabComponent],
  templateUrl: './edit-menu.component.html',
})
export class EditMenuComponent {
  schema = input<Schema>();

  showWebsiteTab = true;
  clickWebsiteTab() {
    this.showPagesTab = false;
    this.showPublishTab = false;
    this.showWebsiteTab = true;
  }

  showPagesTab = false;
  clickPagesTab() {
    this.showPublishTab = false;
    this.showWebsiteTab = false;
    this.showPagesTab = true;
  }

  showPublishTab = false;
  clickPublishTab() {
    this.showWebsiteTab = false;
    this.showPagesTab = false;
    this.showPublishTab = true;
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
