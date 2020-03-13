import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProjectComponent } from './new-project.component';

const routes: Routes = [{ path: '', component: NewProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProjectRoutingModule { }
