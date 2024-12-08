import { Injectable } from '@angular/core';
import { Schema, Page } from '../../../schema';
import { GlobalService } from '../../services/global.service';

@Injectable({providedIn: 'root'})
export class PageService {
  constructor (private readonly globalService: GlobalService) { }

  private readonly schema: Schema = this.globalService.schema.value;

  getPageByLink(url: string): Page | undefined {
    const page = this.schema.pages.find(x => '/' + x.link == url);
    if (page !== undefined) {
      return page;
    }

    const subPage = this.schema.pages
      .find(p => p.pages?.find(sp => '/' + sp.link == url))
      ?.pages?.find(x => '/' + x.link == url);

    return subPage;
  }
}
