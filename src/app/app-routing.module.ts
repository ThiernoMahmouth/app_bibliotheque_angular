import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  /*{
    path:'', component: MenuComponent
  },*/
  { 
    path: 'livres', 
    loadChildren: () => import('./livres/livres.module').then(module => module.LivresModule)
  },
  {
    path: 'prets',
    loadChildren: () => import('./prets/prets.module').then(module => module.PretsModule)
  },
  {
    path: 'materiels',
    loadChildren: () => import('./materiels/materiels.module').then(module => module.MaterielsModule)
  }
];

/*


*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
