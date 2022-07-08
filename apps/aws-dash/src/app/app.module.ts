import { NgModule, ErrorHandler } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import {CoreuiModule} from '@nex/coreui'
//import { IconModule, IconSetService } from '@coreui/icons-angular';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {AuthModule} from '@nex/auth'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    CoreuiModule

  ],
  providers: [
    {
      provide: '@env',
      useValue: environment
    },
    {
      provide: ErrorHandler
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
