import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioPage } from './horario.page';
import { AddUpdateCitaFisioterapiaComponent } from 'src/app/shared/components/add-update-cita-fisioterapia/add-update-cita-fisioterapia.component';

const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  },
  {
    path: 'add-update-cita-fisioterapia/:hora',
    component: AddUpdateCitaFisioterapiaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPageRoutingModule {}
