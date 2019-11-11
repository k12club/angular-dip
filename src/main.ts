import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './polyfills';

if (environment.production) {
  enableProdMode();
}
// Polyfills
// import './Polyfills';
platformBrowserDynamic().bootstrapModule(AppModule, {
  preserveWhitespaces: true
})
  .catch(err => console.log(err));
