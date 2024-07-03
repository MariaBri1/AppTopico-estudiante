import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioPage } from './horario.page';
import { AddUpdateCitaOculistaComponent } from 'src/app/shared/components/add-update-cita-oculista/add-update-cita-oculista.component';

const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  },
  {
    path: 'add-update-cita-oculista/:hora',
    component: AddUpdateCitaOculistaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPageRoutingModule {}
