import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './log-in';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogInPage,
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    SuperTabsModule.forRoot(),
    IonicPageModule.forChild(LogInPage),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogInPageModule { }
