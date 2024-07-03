import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPage } from './gestion.page';

const routes: Routes = [
  {
    path: '',
    component: GestionPage
  },
  {
    path: 'doc',
    loadChildren: () => import('./doc/doc.module').then( m => m.DocPageModule)
  },
  {
    path: 'doc_fisio',
    loadChildren: () => import('./doc_fisio/doc.module').then( m => m.DocPageModule)
  },
  {
    path: 'doc_Dentista',
    loadChildren: () => import('./doc_Dentista/doc.module').then( m => m.DocPageModule)
  },
  {
    path: 'doc_oculista',
    loadChildren: () => import('./doc_oculista/doc.module').then( m => m.DocPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPageRoutingModule {}
