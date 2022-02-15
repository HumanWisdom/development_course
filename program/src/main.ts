import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CometChat } from '@cometchat-pro/chat';

import { AppModule } from './app/app.module';
import { COMETCHATCONSTANTS } from './app/coach/CONSTS';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const appSetting = new CometChat.AppSettingsBuilder().setRegion(COMETCHATCONSTANTS.REGION).subscribePresenceForAllUsers().build();
CometChat.init(COMETCHATCONSTANTS.APP_ID, appSetting).then(() => {

  console.log('app is ready to work');

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}, (error) => {
  console.log('Error In Init', error);
});
