import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SerieDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;


  serie: SerieDetalle = {};
  texto = 150;
  actores: Cast[] = [];
  estrella = 'star-outline';


  slideOptsActores = {
    slidesPerView: 3.3,
    freeMove: true,
    spaceBetween: -5,
  };

  constructor( private seriesService: SeriesService,
               private modalCtrl: ModalController,
               private dataLocal: DataLocalService ) { }

  ngOnInit() {
    this.dataLocal.existeSerie(  this.id )
      .then( existe => this.estrella = ( existe ) ? 'star' : 'star-outline' );

    this.seriesService.getDetalleSerie( this.id )
    .subscribe( resp => {
      this.serie = resp;
    });

    this.seriesService.getActoresSerie( this.id )
    .subscribe( resp => {
      this.actores = resp.cast;
    });
  }

  volver() {
    this.modalCtrl.dismiss();
    this.dataLocal.cargarFavoritos();
  }

  favorito() {
    const existe = this.dataLocal.guardarSerie( this.serie );
    this.estrella = ( existe ) ? 'star' : 'star-outline';

  }









}
