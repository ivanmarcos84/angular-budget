import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ab-form-presenter',
  templateUrl: './form-presenter.component.html',
  styleUrls: ['./form-presenter.component.css']
})
export class FormPresenterComponent implements OnInit {
  @Output() save = new EventEmitter<any>();
  project = {name: ''};
  constructor() { }

  ngOnInit(): void {}
  saveProject() {
    this.save.emit({...this.project});
  }

}
