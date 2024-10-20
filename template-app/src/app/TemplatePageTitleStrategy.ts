import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { GlobalService } from "./services/global.service";

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly globalService: GlobalService) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const customTitle = this.buildTitle(routerState) || '';
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this.title.setTitle(`${customTitle} - ${this.globalService.schema.value.companyName}`);
    }
    else {
      this.title.setTitle(`${this.globalService.schema.value.companyName}`);
    }
  }
}
