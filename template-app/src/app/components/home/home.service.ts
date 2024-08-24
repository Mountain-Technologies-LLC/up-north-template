import { Injectable } from '@angular/core';
import * as data from '../../../data.json';
import { Data, PageHome } from './../../data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly data: Data = data;

  getHomeData(): PageHome {
    return this.data.pageHome;
  }
}
