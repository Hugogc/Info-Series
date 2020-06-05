import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Serie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {

  @Input() seriesPopulares: Serie[] = [];
  @Output() cargarMasAccion = new EventEmitter();
  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true,
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}


  async verDetalle( id: string ) {
    const modal = await this.modalCtrl.create({
       component: DetalleComponent,
       componentProps: {
         id
       }
     });
    modal.present();
   }

  onClick() {
    this.cargarMasAccion.emit();
  }
}
