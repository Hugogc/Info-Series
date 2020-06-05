import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


const URL = environment.imgPath;

@Pipe({
  name: 'imagenpares'
})
export class ImagenparesPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if ( !img ) {
      return './assets/pares-no-image.jpg';
    }

    const imgUrlPares = `${ URL }/${ size }${ img }`;
    return imgUrlPares;
  }

}
