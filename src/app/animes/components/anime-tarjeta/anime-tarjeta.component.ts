import { Component, Input } from '@angular/core';
import { Anime } from '../../interfaces/animes.interface';

@Component({
  selector: 'app-anime-tarjeta',
  templateUrl: './anime-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class AnimeTarjetaComponent{

  @Input() anime!: Anime;

}
