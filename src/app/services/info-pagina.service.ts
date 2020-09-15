import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InforPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InforPagina = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    /// leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:InforPagina) => {
          this.cargada = true;
          this.info = resp;
      });

  }
}
