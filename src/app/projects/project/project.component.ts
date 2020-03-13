import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId: number;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => this.projectId = params.projectId);
    // this.projectId = 5;
  }

  ngOnInit(): void {
  }

}
