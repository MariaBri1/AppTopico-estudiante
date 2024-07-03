import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioPageRoutingModule } from '../../doc_Dentista/horario/horario-routing.module';

import { HorarioPage } from '../../doc_Dentista/horario/horario.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPageRoutingModule,
    SharedModule
  ],
  declarations: [HorarioPage]
})
export class HorarioPageModule {}
