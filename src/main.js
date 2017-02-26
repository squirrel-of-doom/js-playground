import 'reflect-metadata'
import 'zone.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
})();
