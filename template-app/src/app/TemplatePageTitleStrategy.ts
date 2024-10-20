import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { GlobalService } from "./services/global.service";

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly globalService: GlobalService
  ) {
    console.log('title', title);
    console.log('globalService', globalService);

    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    console.log('this.title', this.title);
    const customTitle = this.buildTitle(routerState) || '';
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this.title.setTitle(`${customTitle} - ${this.globalService.schema.value.companyName}`);
    }

    console.log('this.title', this.title);
  }
}
