import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterielAddComponent } from './materiel-add/materiel-add.component';
import { MaterielDeleteComponent } from './materiel-delete/materiel-delete.component';
import { MaterielListComponent } from './materiel-list/materiel-list.component';

const routes: Routes = 
[
  { path: '', component: MaterielListComponent },
  { path: 'ajouter', component: MaterielAddComponent },
  { path: 'supprimer', component: MaterielDeleteComponent },
  { path: 'modifier', component: MaterielAddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielsRoutingModule { }
