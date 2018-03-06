import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];

  constructor(
        private projectService: ProjectService,
        private http: HttpClient
    ) { }

  ngOnInit() {
      
    // this.getProjects();
    
    this.getData();
    
    // this.projects = this.http.get<Project[]>('http://localhost:3405/projects');
    
    // Typ nåt sånt här:
    // console.log(this.http.get<Project[]>('http://localhost:3404/projects')
                //   .subscribe(result => this.projects = result);
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
    console.log(this.projects);
  }
  
  getData(): void {
      this.projectService.getData().subscribe(projects => this.projects = projects);
  }
  

}
