import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'nex-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.sass']
})
export class DefaultFooterComponent extends FooterComponent {

  constructor() {
    super();
  }


}
