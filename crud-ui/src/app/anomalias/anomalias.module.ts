import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliasRoutingModule } from './anomalias-routing.module';
import { AnomaliaTableComponent } from './anomalia-table/anomalia-table.component';


@NgModule({
  declarations: [
    AnomaliaTableComponent
  ],
  imports: [
    CommonModule,
    AnomaliasRoutingModule
  ]
})
export class AnomaliasModule { }
