import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schema } from '../../schema';

// https://blog.briebug.com/blog/how-declare-global-variable-angular

@Injectable({providedIn: 'root'})
export class GlobalService {
  schema = new BehaviorSubject<Schema>({
    companyName: 'Default',
    email: '',
    pageHome: {
      sections: []
    },
    pages: [],
    phoneNumber: '',
    phoneTel: '',
    socialLink: '',
    socialName: '',
    socialUsername: '',
    tagline: '',
    themeDefault: '',
    themeDark: null,
    themeLight: null
  });

  editing = new BehaviorSubject<boolean>(true);

  InitializeSchema(schema: Schema) {
    this.schema.next(schema);
  }
}
