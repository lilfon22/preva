import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Anime } from '../../interfaces/animes.interface';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class SubirComponent implements OnInit {


  anime: Anime = {
    name: '',
    jap_name: '',
    description: '',
    categorie: '',
    breve: '',
    rating: (0),
    episodes: (0),
    studio: '',
    img: '',
    wtw: ''
  }

  constructor( private animesService: AnimesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.animesService.getAnimePorId( id ) )
      )
      .subscribe( anime => this.anime = anime );

  }

  guardar() {
    
    if( this.anime.name.trim().length === 0  ) {
      return;
    }

    if ( this.anime.id ) {
      // Actualizar
      this.animesService.actualizarAnime( this.anime )
        .subscribe( anime => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.animesService.agregarAnime( this.anime )
        .subscribe( anime => {
          this.router.navigate(['/animes/editar', anime.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarAnime() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.anime
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.animesService.borrarAnime( this.anime.id! )
            .subscribe( resp => {
              this.router.navigate(['/animes']);
            });
        }
        
      }
    )



  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

}
