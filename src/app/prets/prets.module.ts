import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PretListComponent } from './pret-list/pret-list.component';
import { PretDeleteComponent } from './pret-delete/pret-delete.component';
import { PretAddComponent } from './pret-add/pret-add.component';
import { MaterialModule } from '../material/material.module';
import { PretsRoutingModule } from './prets-routing.module';



@NgModule({
  declarations: [
    PretListComponent,
    PretDeleteComponent,
    PretAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PretsRoutingModule
  ]
})
export class PretsModule { }
