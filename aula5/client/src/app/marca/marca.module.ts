import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarcaFormComponent } from './marca-form/marca-form.component';
import { MarcaListComponent } from './marca-list/marca-list.component';

@NgModule({
  exports: [
    MarcaFormComponent,
    MarcaListComponent
  ],
  declarations: [
    MarcaFormComponent,
    MarcaListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MarcaModule { }
