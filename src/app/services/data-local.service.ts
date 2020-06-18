import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SerieDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

series: SerieDetalle[] = [];



  constructor( private storage: Storage,
               private toastController: ToastController  ) {
    this.cargarFavoritos();
  }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
        message,
        duration: 1500
      });
    toast.present();
  }

  guardarSerie( serie: SerieDetalle ) {
    let existe = false;
    let mensaje =  '';
    for ( const srie of this.series ) {
          if ( srie.id === serie.id ) {
            existe = true;
            break;
          }
        }
    if ( existe ) {
          this.series = this.series.filter( srie => srie.id !== serie.id );
          mensaje = 'Eliminado de favoritos';
        } else {
          this.series.push( serie );
          mensaje = 'Añadida a favoritos';
        }
    this.presentToast( mensaje );
    this.storage.set('series', this.series );
    return !existe;

  }


  async cargarFavoritos() {
    const series = await this.storage.get( 'series' );
    this.series = series || [];
    return this.series;
    }

    async existeSerie( id ) {

    await this.cargarFavoritos();
    const existe = this.series.find( srie => srie.id === id );
    return (existe) ? true : false;
  }


}
