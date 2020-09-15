import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InforPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InforPagina = {};
  cargada = false;
  equipo: any[];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    /// leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:InforPagina) => {
          this.cargada = true;
          this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-portafolio-c2f0d.firebaseio.com/equipo.json')
      .subscribe((resp: any[])  => {
          this.equipo = resp;
      })
  }
}
