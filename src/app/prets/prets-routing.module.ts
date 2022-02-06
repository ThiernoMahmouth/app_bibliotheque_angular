import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PretAddComponent } from './pret-add/pret-add.component';
import { PretDeleteComponent } from './pret-delete/pret-delete.component';
import { PretListComponent } from './pret-list/pret-list.component';

const routes: Routes = 
[
  { path: '', component: PretListComponent },
  { path: 'ajouter', component: PretAddComponent },
  { path: 'supprimer', component: PretDeleteComponent },
  { path: 'modifier', component: PretAddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PretsRoutingModule { }
