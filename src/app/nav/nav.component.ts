import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // let isOpen = true;

  // menuLinkClicked() {
  //   console.log('clicked');
  //   if (!isOpen) {
  //     $('#navbarColor02').addClass('open');
  //   } else {
  //     $('#navbarColor02').removeClass('open');
  //   }
  //   isOpen = !isOpen;
  // }

  menuClick(): void {
    console.log('clicked');
    $('#navbarColor02').collapse();
  }

}
