import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './log-in';
import { SuperTabsModule } from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    LogInPage,
  ],
  imports: [
    SuperTabsModule.forRoot(),
    IonicPageModule.forChild(LogInPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LogInPageModule {}
