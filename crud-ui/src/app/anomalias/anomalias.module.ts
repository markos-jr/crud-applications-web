import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliasRoutingModule } from './anomalias-routing.module';
import { AnomaliaTableComponent } from './anomalia-table/anomalia-table.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AnomaliaTableComponent

  ],
  imports: [
    CommonModule,
    AnomaliasRoutingModule,
    AppMaterialModule,
    SharedModule,


  ]
})
export class AnomaliasModule { }
