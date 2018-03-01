import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuClick(): void {
    const w = window.innerWidth;
    if (w < 992) {
      $('#navbarColor02').collapse('toggle');
    }
  }

}
