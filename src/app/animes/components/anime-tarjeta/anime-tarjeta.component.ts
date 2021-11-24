import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../../interfaces/animes.interface';
import { AnimesService } from '../../services/animes.service';

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
  @Output() disparadorDeFav = new EventEmitter<Anime>();

  constructor( private animesService: AnimesService) { }

  agregarFavorito() {
    this.animesService.disparadorDeFav.emit({        
      anime:this.anime
    });
  }

} 

