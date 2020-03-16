import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectComponent } from './new-project.component';
import { FormPresenterComponent } from './form-presenter/form-presenter.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [NewProjectComponent, FormPresenterComponent, ProjectListComponent],
  imports: [
    CommonModule,
    NewProjectRoutingModule,
    FormsModule
  ]
})
export class NewProjectModule { }
