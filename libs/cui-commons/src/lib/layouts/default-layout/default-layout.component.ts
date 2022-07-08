import { Component, OnInit, Input } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';

import { INavData } from '@coreui/angular';


@Component({
  selector: 'nex-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.sass']
})
export class DefaultLayoutComponent implements OnInit {





navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  }]

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

   constructor( private iconSetService: IconSetService) {
    iconSetService.icons = { ...iconSubset };
   }

  ngOnInit(): void {
    console.log(1)
  }

}
