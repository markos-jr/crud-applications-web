import { AnomaliaFormComponent } from './../anomalia-form/anomalia-form.component';
import { Component, OnInit } from '@angular/core';
import { AnomaliasService } from '../services/anomalias.service';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface Anomalias {
  _id: string;
  equipamento: string;
  falha: string;
}

@Component({
  selector: 'app-anomalia-table',
  templateUrl: './anomalia-table.component.html',
  styleUrls: ['./anomalia-table.component.scss'],
})
export class AnomaliaTableComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'equipamento', 'falha', 'actions'];

  anomalias$: Observable<Anomalias[]>;


  constructor(
    private anomaliasService: AnomaliasService,
    public dialog: MatDialog,

    ) {

    this.anomalias$ = this.anomaliasService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar as Anomalias')
        return of([])
      })
    )

  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg
    });
  }

  ngOnInit(): void {
    //
  }

  openDialog() {
    const dialogRef = this.dialog.open(AnomaliaFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}

}
