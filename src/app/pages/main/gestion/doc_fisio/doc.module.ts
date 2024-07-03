import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocPageRoutingModule } from './doc-routing.module';

import { DocPage } from './doc.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocPageRoutingModule,
    SharedModule
  ],
  declarations: [DocPage]
})
export class DocPageModule {}
