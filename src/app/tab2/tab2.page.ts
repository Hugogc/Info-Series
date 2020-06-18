import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Serie } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  series: Serie[] = [];
  buscando = false;
  sugerencias: string[] = ['Juego de tronos', 'Hijos de la anarquia', 'La casa de papel', 'Los Simpson', 'Breaking Bad'];


  constructor( private seriesService: SeriesService,
               private modalCtrl: ModalController ) {}




  buscar( event ) {
    const valor: string = event.detail.value;
    if ( valor.length === 0 ) {
      this.buscando = false;
      this.series = [];
      return;
    }
    this.buscando = true;
    this.seriesService.buscarSeries( valor )
        .subscribe( resp => {
          this.series = resp['results'];
          this.buscando = false;
        });

  }

  async verDetalle( id: string ) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }


}
