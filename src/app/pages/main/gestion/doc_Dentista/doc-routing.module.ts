import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocPage } from '../doc_Dentista/doc.page';

const routes: Routes = [
  {
    path: '',
    component: DocPage
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocPageRoutingModule {}
