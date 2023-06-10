import { Component, OnInit } from '@angular/core';


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


  anomalias: Anomalias[] = [
    {_id: '1', equipamento: 'CCM1', falha: 'Elétrica'}
  ];

  constructor(){
    //this.anomalias = []
  }

  ngOnInit(): void {

  }

}


