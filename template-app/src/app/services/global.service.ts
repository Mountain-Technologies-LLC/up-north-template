import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schema } from '../../schema';
import { environment } from '../../environment/environment';

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
    theme: ''
  });

  editing = new BehaviorSubject<boolean>(true);

  constructor() {
    let schemaUrl = environment.schemaUrl && environment.schemaUrl.length > 0
      ? environment.schemaUrl
      : environment.demoSchemaUrl;

    const request = new Request(schemaUrl);

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.schema.next(json);
      });
  }
}
// npm run start -- --env.schemaUrl='https://raw.githubusercontent.com/Mountain-Technologies-LLC/up-north-template/refs/heads/main/template-app/src/schema.json'
