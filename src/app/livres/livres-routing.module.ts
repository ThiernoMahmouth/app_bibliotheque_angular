import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreOneComponent } from './livre-one/livre-one.component';
import { LivresAjouterComponent } from './livres-ajouter/livres-ajouter.component';
import { LivresListComponent } from './livres-list/livres-list.component';
import { LivresModifierComponent } from './livres-modifier/livres-modifier.component';
import { LivresSupprimerComponent } from './livres-supprimer/livres-supprimer.component';

const routes: Routes = 
[
  { path: '' , component: LivresListComponent},
  { path: 'ajouter' , component: LivresAjouterComponent},
  { path: 'supprimer' , component: LivresSupprimerComponent},
  { path: 'modifier' , component: LivresModifierComponent},
  { path: ':id' , component: LivreOneComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivresRoutingModule { }
