import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';




const URL = environment.url;
const apiKey = environment.apiKey;
const idioma = environment.idioma;

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private enEmision = 0;
  private popularesPage = 0;
  private ultimasSeries = 0;



  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>( query: string ) {
    query = URL + query;
    query += `?api_key=${ apiKey }${ idioma }${ this.enEmision }`;
    return this.http.get<T>( query );
  }
  private ejecutarQuery2<T>( query: string ) {
    query = URL + query;
    query += `?api_key=${ apiKey }${ idioma }${ this.popularesPage }`;
    return this.http.get<T>( query );
  }
  private ejecutarQuery3<T>( query: string ) {
    query = URL + query;
    query += `?api_key=${ apiKey }${ idioma }${ this.ultimasSeries }`;
    return this.http.get<T>( query );
  }


  getEnEmision() {
    this.enEmision++;
    return this.ejecutarQuery<RespuestaMDB>('/tv/on_the_air');
  }
  getPopulares() {
    this.popularesPage++;
    return this.ejecutarQuery2<RespuestaMDB>('/tv/popular');
  }
  getUltimas() {
    this.ultimasSeries++;
    return this.ejecutarQuery3<RespuestaMDB>('/tv/airing_today');
  }









}
