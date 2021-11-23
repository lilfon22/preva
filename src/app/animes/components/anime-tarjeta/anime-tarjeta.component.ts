import { Component, Input } from '@angular/core';
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

  constructor( private animesService: AnimesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  @Input() anime!: Anime;

  guardar() {
    
    if( this.anime.name.trim().length === 0  ) {
      return;
    }

    if ( this.anime.id ) {
      // Actualizar
      this.animesService.actualizarAnime( this.anime )
        .subscribe( anime => this.mostrarSnakbar('Este anime ha sido'));
    }

  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'añadido a favoritos', {
      duration: 2500
    });

  }

}
