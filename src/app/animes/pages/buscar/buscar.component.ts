import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Anime } from '../../interfaces/animes.interface';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  animes: Anime[] = [];
  animeSeleccionado: Anime | undefined;

  constructor( private animesService: AnimesService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.animesService.getSugerencias( this.termino.trim() )
      .subscribe( animes => this.animes = animes );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.animeSeleccionado = undefined;
      return;
    }

    const anime: Anime = event.option.value;
    this.termino = anime.name;

    this.animesService.getAnimePorId( anime.id! )
      .subscribe( anime => this.animeSeleccionado = anime );
  }

}