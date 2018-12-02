import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { RegistryPageModule } from '../pages/registry/registry.module';
import { RegistryTabPage } from '../pages/registry-tab/registry-tab';
import { HomeProvider } from '../providers/home/home';
import { HttpClientModule } from '@angular/common/http';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    MyApp,
    RegistryTabPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RegistryPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistryTabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

  ],
})
export class AppModule { }
