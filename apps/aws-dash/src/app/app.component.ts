

import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'nex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'aws-dash';


  constructor(
    private router: Router,
    private titleService: Title
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
  }
}
