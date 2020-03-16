import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  // project = {name: '' };
  // projects: any[] = this.projectsService.projects;
  projects: any[];
  constructor(private projectsService: ProjectsService) {

   }

  ngOnInit(): void {

  }

  saveProject(newProject: any) {
    this.projects = this.projectsService.saveProject(newProject);
  }

  deleteProject(project: any) {
    this.projectsService.deleteProject(project) ; }
}
