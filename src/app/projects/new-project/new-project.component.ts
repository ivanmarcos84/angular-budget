import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project = {name: '' };

  constructor() { }

  ngOnInit(): void {
  }

  saveProject() {
    console.log(this.project.name);
  }

}
