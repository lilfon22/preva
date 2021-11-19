import { Pipe, PipeTransform } from '@angular/core';
import { Anime } from '../interfaces/animes.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( anime: Anime ): string {

    if( !anime.id && !anime.img ) {
      return 'assets/no-image.png';
    } else if ( anime.img ) {
      return anime.img;
    } else {
      return `assets/heroes/${ anime.id }.jpg`;
    }


  }

}
