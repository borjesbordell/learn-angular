import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[];
  
  project: any;

  constructor(
        private projectService: ProjectService
    ) { }

  ngOnInit() {
    this.getProjects();
  }
  
  getProjects(): void {
      this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }
  
  getProject(id: number): void {
    //   TODO: when clicked - show projectComponent by routerLink (component already generated)
      this.projectService.getProject(id)
        .subscribe(project => this.project = project);
  }
  
  add(name: string): void {
      name = name.trim();
      if(!name) { return ; }
      this.projectService.addProject( { name } as Project)
        .subscribe(project => {
            this.projects.push(project);
        });
  }

  update(id: number, name: string): void {
    console.log(`id=${id} name=${name}`);
    console.log(this.project);
    this.projectService.updateProject(this.project)
      .subscribe();
  }
  
  delete(project: Project): void {
      this.projects = this.projects.filter(p => p !== project);
      this.projectService.deleteProject(project).subscribe();
  }
  

}
