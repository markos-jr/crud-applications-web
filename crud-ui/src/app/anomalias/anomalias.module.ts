import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliasRoutingModule } from './anomalias-routing.module';
import { AnomaliaTableComponent } from './anomalia-table/anomalia-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AnomaliaTableComponent

  ],
  imports: [
    CommonModule,
    AnomaliasRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AnomaliasModule { }
