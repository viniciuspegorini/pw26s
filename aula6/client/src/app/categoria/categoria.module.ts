import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports: [
    CategoriaFormComponent,
    CategoriaListComponent
  ],
  declarations: [
    CategoriaFormComponent,
    CategoriaListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
