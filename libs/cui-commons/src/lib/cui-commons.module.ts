import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreuiModule} from '@nex/coreui'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { DefaultFooterComponent } from './components/default-footer/default-footer.component';
import { DefaultErrorComponent } from './components/default-error/default-error.component';
import { RouterModule, Route } from '@angular/router';


import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { IconModule, IconSetService } from '@coreui/icons-angular';

import {
  BadgeModule,
  SidebarModule,

  HeaderModule,
  FooterModule,
  NavModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular';

const modules =[
  BadgeModule,
  SidebarModule,

  HeaderModule,
  FooterModule,
  NavModule,
  SharedModule,
  UtilitiesModule
]

const routes: Route[] =[]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreuiModule,
    modules,
    PerfectScrollbarModule,
    IconModule,


  ],
  declarations: [
    DefaultLayoutComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultErrorComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService
  ],
  exports:[RouterModule]
})
export class CuiCommonsModule {}
