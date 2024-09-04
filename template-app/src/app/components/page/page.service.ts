import { Injectable, signal } from '@angular/core';
import { Data, Page } from '../../../data';
import * as data from '../../../data.json';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  data = signal<Data>(data);

  getPageByLink(url: string): Page | undefined {
    const page = this.data().pages.find(x => '/' + x.link == url);
    if (page !== undefined) {
      return page;
    }

    const subPage = this.data().pages
      .find(p => p.pages?.find(sp => '/' + sp.link == url))
      ?.pages?.find(x => '/' + x.link == url);

    return subPage;
  }
}
