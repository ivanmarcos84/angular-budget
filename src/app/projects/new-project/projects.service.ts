import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: any[] = [];

  constructor() { }

  saveProject(newProject: any): any[] {
    this.projects.push(newProject);
    console.log(newProject.name);
    return [...this.projects];
  }

  deleteProject(project: any): any[] {
    this.projects = this.projects.filter(p => p.name !== project.name);
    return [...this.projects];
  }
}
