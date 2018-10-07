import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class InfoPaginaService {
  info: any = {  };
  cargado = false;
  constructor( private _http: HttpClient) {
   this._http.get('assets/data/data-pagina.json').subscribe(resp => {
     this.info = resp;
     this.cargado = true;
   });

  }
}


