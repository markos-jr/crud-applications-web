import { Anomalias } from './../anomalia-table/anomalia-table.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnomaliasService {

  constructor(public httpClient: HttpClient) { }

  private readonly API = '/assets/anomalias.json'

  list(){
   return this.httpClient.get<Anomalias[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(anomalias => console.log(anomalias))
   );
  }
}
