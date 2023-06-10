import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnomaliaTableComponent } from './anomalia-table/anomalia-table.component';

const routes: Routes = [
  {path:'', component: AnomaliaTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnomaliasRoutingModule { }
