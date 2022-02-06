import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterielAddComponent } from './materiel-add/materiel-add.component';
import { MaterielListComponent } from './materiel-list/materiel-list.component';
import { MaterielDeleteComponent } from './materiel-delete/materiel-delete.component';
import { MaterialModule } from '../material/material.module';
import { MaterielsRoutingModule } from './materiels-routing.module';



@NgModule({
  declarations: [
    MaterielAddComponent,
    MaterielListComponent,
    MaterielDeleteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterielsRoutingModule

  ]
})
export class MaterielsModule { }
