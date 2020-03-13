import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectComponent } from './new-project.component';


@NgModule({
  declarations: [NewProjectComponent],
  imports: [
    CommonModule,
    NewProjectRoutingModule,
    FormsModule
  ]
})
export class NewProjectModule { }
