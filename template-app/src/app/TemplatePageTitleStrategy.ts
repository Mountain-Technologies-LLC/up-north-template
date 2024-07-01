import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { Data } from "./data";
import * as data from '../assets/data.json';

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  private readonly data: Data = data;

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const customTitle = this.buildTitle(routerState) || '';
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this.title.setTitle(`${customTitle} - ${this.data.companyName}`);
    }
  }
}
