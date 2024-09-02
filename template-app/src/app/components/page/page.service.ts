import { Injectable, signal } from '@angular/core';
import { Data, Page } from '../../../data';
import * as data from '../../../data.json';
import { GlobalService } from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  data = signal<Data>(data);

  constructor (public globalService: GlobalService)
  {
    this.globalService.data.subscribe({
      next: newValue => {
        // this.data.set(newValue)
        console.log("PageService subscribe")
      }
    });
  }

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
