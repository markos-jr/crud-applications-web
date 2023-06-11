import { Component, OnInit } from '@angular/core';
import { AnomaliasService } from '../services/anomalias.service';
import { Observable } from 'rxjs';

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
  displayedColumns: string[] = ['_id', 'equipamento', 'falha'];

  anomalias$: Observable<Anomalias[]>;

  //anomaliasService: AnomaliasService;

  constructor(private anomaliasService: AnomaliasService) {
    //this.anomalias = []
    //this.anomaliasService = new AnomaliasService();

    this.anomalias$ = this.anomaliasService.list();
    /*  this.anomaliasService.list().subscribe( anomalias => this.anomalias = anomalias) */
  }

  ngOnInit(): void {
    //
  }
}
