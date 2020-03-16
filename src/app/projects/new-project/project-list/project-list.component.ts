import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ab-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects = [];
  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(project: any){
    this.delete.emit(project);
  }

}
