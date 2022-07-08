import { Component,Input } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'nex-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.sass']
})
export class DefaultHeaderComponent  extends HeaderComponent  {

  @Input() sidebarId = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService) {
    super();
  }


}
