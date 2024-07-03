import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CitaConcluidaPageRoutingModule } from './cita-concluida-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitaConcluidaPage } from './cita-concluida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitaConcluidaPageRoutingModule,
    SharedModule
  ],
  declarations: [CitaConcluidaPage]
})
export class CitaConcluidaPageModule {}
