import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaConcluidaPage } from './cita-concluida.page';

const routes: Routes = [
  {
    path: '',
    component: CitaConcluidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaConcluidaPageRoutingModule {}
