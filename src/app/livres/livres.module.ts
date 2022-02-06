import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivresListComponent } from './livres-list/livres-list.component';
import { LivresAjouterComponent } from './livres-ajouter/livres-ajouter.component';
import { LivresSupprimerComponent } from './livres-supprimer/livres-supprimer.component';
import { LivreOneComponent } from './livre-one/livre-one.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LivresModifierComponent } from './livres-modifier/livres-modifier.component';
import { LivresRoutingModule } from './livres-routing.module';



@NgModule({
  declarations: [
    LivresListComponent,
    LivresAjouterComponent,
    LivresSupprimerComponent,
    LivreOneComponent,
    LivresModifierComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LivresRoutingModule
  ]
})
export class LivresModule { }
