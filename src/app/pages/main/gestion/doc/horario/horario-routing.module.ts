import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioPage } from '../../doc/horario/horario.page';
import { AddUpdateCitaComponent } from 'src/app/shared/components/add-update-cita/add-update-cita.component'; 

const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  },
  {
    path: 'add-update-cita/:hora',
    component: AddUpdateCitaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPageRoutingModule {}
