import { Anomalias } from './../anomalia-table/anomalia-table.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnomaliasService {

  constructor(private httpClient: HttpClient) { }

  list(): Anomalias[] {
    return[
      {_id: '1', equipamento: 'CCM1', falha: 'Elétrica'}
    ]
  }
}
