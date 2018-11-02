import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistryPage } from './registry';
import { SuperTabsModule } from 'ionic2-super-tabs';
@NgModule({
  declarations: [
    RegistryPage,
  ],
  imports: [
    SuperTabsModule.forRoot(),
    IonicPageModule.forChild(RegistryPage)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RegistryPageModule {}
