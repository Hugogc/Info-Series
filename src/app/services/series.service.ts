import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, SerieDetalle, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';




const URL = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  private popularesPage = 0;



  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>( query: string ) {
    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;
    return this.http.get<T>( query );
  }
  // private ejecutarQuery2<T>( query: string ) {
  //   query = URL + query;
  //   query += `?api_key=${ apiKey }${ idioma }${ this.popularesPage }`;
  //   return this.http.get<T>( query );
  // }
  // private ejecutarQuery3<T>( query: string ) {
  //   query = URL + query;
  //   query += `?api_key=${ apiKey }${ idioma }${ this.ultimasSeries }`;
  //   return this.http.get<T>( query );
  // }


  getEnEmision() {
    return this.ejecutarQuery<RespuestaMDB>('/tv/on_the_air?page=1');
  }
  getPopulares() {
    this.popularesPage++;
    return this.ejecutarQuery<RespuestaMDB>( `/tv/popular?page=${ this.popularesPage }` );
  }
  getUltimas() {
    return this.ejecutarQuery<RespuestaMDB>('/tv/airing_today?page=1');
  }


  getDetalleSerie( id: string ) {
    return this.ejecutarQuery<SerieDetalle>( `/tv/${ id }?a=1` );
  }

  getActoresSerie( id: string ) {
    return this.ejecutarQuery<RespuestaCredits>( `/tv/${ id }/credits?a=1` );
  }

  buscarSeries( texto: string ) {
    return this.ejecutarQuery<SerieDetalle>(`/search/tv?query=${ texto }`);
  }




}
