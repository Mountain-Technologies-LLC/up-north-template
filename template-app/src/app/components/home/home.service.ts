import { Injectable } from '@angular/core';
import { Schema, PageHome } from '../../../schema';
import { GlobalService } from '../../services/global.service';

@Injectable({providedIn: 'root'})
export class HomeService {
  constructor (private readonly globalService: GlobalService) { }

  private readonly schema: Schema = this.globalService.schema.value;

  getHomeData(): PageHome {
    return this.schema.pageHome;
  }
}
