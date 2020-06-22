import { Component } from '@angular/core';
import { SerieDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  series: SerieDetalle[] = [];



  // @Output() load = new EventEmitter<boolean>();


  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };


  // async ngOnInit() {
  //   this.series = await this.dataLocal.cargarFavoritos();
  // }
  async cargarDatos() {
    this.series = await this.dataLocal.cargarFavoritos();
  }
   ionViewWillEnter() {
   this.cargarDatos();
  }
  constructor( public dataLocal: DataLocalService,
               private modalCtrl: ModalController ) {}


    async verDetalle( id: string ) {
      const modal = await this.modalCtrl.create({
        component: DetalleComponent,
        componentProps: {
          id,
          event
        }
      });
      modal.onDidDismiss().then(data => {
        this.cargarDatos();
      });
      modal.present();
    }

}
