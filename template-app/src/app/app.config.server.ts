import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { getConfig } from './app.config';
import { environment } from '../environment/environment';

const schemaUrl = environment.schemaUrl && environment.schemaUrl.length > 0
  ? environment.schemaUrl
  : environment.demoSchemaUrl;
const request = new Request(schemaUrl);

async function getMergeApplicationConfig(): Promise<ApplicationConfig> {
  let appConfig: ApplicationConfig;

  await fetch(request)
    .then(response => response.json())
    .then(remoteConfig => {
      appConfig = getConfig(remoteConfig);
    })
    .catch(err => console.error('fetch-fail', err));

  return mergeApplicationConfig(appConfig!, serverConfig)
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

const config = async () => await getMergeApplicationConfig();

export default config;
