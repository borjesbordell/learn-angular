import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // bara för att testa lite
  about: number = 43;
  constructor() { }

  ngOnInit() {
  }

}
