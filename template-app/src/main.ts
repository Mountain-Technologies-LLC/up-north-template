import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environment/environment';
import { getConfig } from './app/app.config';

const schemaUrl = environment.schemaUrl && environment.schemaUrl.length > 0
  ? environment.schemaUrl
  : environment.demoSchemaUrl;
const request = new Request(schemaUrl);

fetch(request)
  .then(response => response.json())
  .then(remoteConfig => {
    bootstrapApplication(AppComponent, getConfig(remoteConfig))
      .catch((err) => console.error('bootstrap-fail', err));
  })
  .catch(err => console.error('fetch-fail', err));
