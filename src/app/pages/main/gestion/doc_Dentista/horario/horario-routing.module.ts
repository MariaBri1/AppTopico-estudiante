import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioPage } from '../../doc_Dentista/horario/horario.page';
import { AddUpdateCitaDentistaComponent } from 'src/app/shared/components/add-update-cita-dentista/add-update-cita-dentista.component';
const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  },
  {
    path: 'add-update-cita-dentista/:hora',
    component: AddUpdateCitaDentistaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPageRoutingModule {}
