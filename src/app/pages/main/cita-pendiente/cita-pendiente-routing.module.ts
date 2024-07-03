import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaPendientePage } from './cita-pendiente.page';

const routes: Routes = [
  {
    path: '',
    component: CitaPendientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaPendientePageRoutingModule {}
