import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

import {

  CardModule,
  GridModule

} from '@coreui/angular';

const modules =[

  CardModule,
  GridModule
]


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    modules
  ],
  declarations: [HomeComponent],
})
export class DashModule {}
