import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnomaliasRoutingModule } from './anomalias-routing.module';
import { AnomaliaTableComponent } from './anomalia-table/anomalia-table.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AnomaliaFormComponent } from './anomalia-form/anomalia-form.component';



@NgModule({
  declarations: [
    AnomaliaTableComponent,
    AnomaliaFormComponent

  ],
  imports: [
    CommonModule,
    AnomaliasRoutingModule,
    AppMaterialModule,
    SharedModule,


  ]
})
export class AnomaliasModule { }
