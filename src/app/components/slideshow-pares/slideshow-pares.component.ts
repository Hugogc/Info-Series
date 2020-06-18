import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Serie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() seriesPopulares: Serie[] = [];
  @Output() cargarMasPopulares = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true,
    spaceBetween: -20,
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
    this.cargarMasPopulares.emit();
  }

}
