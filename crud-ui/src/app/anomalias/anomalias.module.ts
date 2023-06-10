import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliasRoutingModule } from './anomalias-routing.module';
import { AnomaliaTableComponent } from './anomalia-table/anomalia-table.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    AnomaliaTableComponent

  ],
  imports: [
    CommonModule,
    AnomaliasRoutingModule,
    AppMaterialModule
  ]
})
export class AnomaliasModule { }
