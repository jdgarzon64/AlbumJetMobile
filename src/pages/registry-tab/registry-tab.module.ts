import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistryTabPage } from './registry-tab';
import { SuperTabsModule } from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    RegistryTabPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistryTabPage),
    SuperTabsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegistryTabPageModule {}
