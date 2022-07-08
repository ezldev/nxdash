import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {DefaultErrorComponent, DefaultLayoutComponent} from '@nex/cui-commons'

import {DashGuard} from '@nex/auth'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [DashGuard],
    data: {
      title: 'Home',
      permissions: ['dashboard']
    },
    children: [
      {
        path: 'dashboard',
        canActivate: [DashGuard],
        data: { permissions: ['dashboard'] },
        loadChildren: () =>
          import('@nex/dash').then((m) => m.DashModule)
      }
    ]
  }

]

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
        initialNavigation: 'enabledBlocking'
        // relativeLinkResolution: 'legacy'
      })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
