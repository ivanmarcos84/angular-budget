import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { ShellComponent } from './shell/shell.component';


@NgModule({
  declarations: [ShellComponent, HeaderComponent,
     MainComponent, FooterComponent],
     imports: [CommonModule, RouterModule],
     exports: [ShellComponent],
})
export class LayoutModule { }
