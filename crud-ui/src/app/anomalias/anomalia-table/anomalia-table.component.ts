import { Component, OnInit } from '@angular/core';
import { AnomaliasService } from '../services/anomalias.service';


export interface Anomalias {
  _id: string;
  equipamento: string;
  falha: string;

}

@Component({
  selector: 'app-anomalia-table',
  templateUrl: './anomalia-table.component.html',
  styleUrls: ['./anomalia-table.component.scss']
})
export class AnomaliaTableComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'equipamento', 'falha'];


  anomalias: Anomalias[] = [];

  //anomaliasService: AnomaliasService;

  constructor(private anomaliasService: AnomaliasService){
    //this.anomalias = []
    //this.anomaliasService = new AnomaliasService();

  }

  ngOnInit(): void {
    this.anomalias = this.anomaliasService.list(); // Pode ficar dentro do construtor também
  }

}


