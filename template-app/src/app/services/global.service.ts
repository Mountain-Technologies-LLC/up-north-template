import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as data from '../../data.json';
import { Data } from '../../data';

// https://blog.briebug.com/blog/how-declare-global-variable-angular

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  data = new BehaviorSubject<Data>(data);
  editing = new BehaviorSubject<boolean>(true);
}
