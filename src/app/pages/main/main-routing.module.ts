import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:[
 
      {
        path: 'profile',loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },

      { path: 'gestion', loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionPageModule) },

      { path: 'cita-concluida', loadChildren: () => import('./cita-concluida/cita-concluida.module').then(m => m.CitaConcluidaPageModule) },

      { path: 'cita-pendiente', loadChildren: () => import('./cita-pendiente/cita-pendiente.module').then(m => m.CitaPendientePageModule)},

  

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}