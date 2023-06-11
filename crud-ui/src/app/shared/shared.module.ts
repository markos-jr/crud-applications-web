import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule

  ], exports: [ErrorDialogComponent] //Parra exportar o component em outros módulos
})
export class SharedModule { }
