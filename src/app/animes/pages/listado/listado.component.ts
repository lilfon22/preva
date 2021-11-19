import { Component, OnInit } from '@angular/core';
import { Anime } from '../../interfaces/animes.interface';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  animes: Anime[] = [];
  
  constructor( private animesService: AnimesService ) { }

  ngOnInit(): void {

    this.animesService.getAnimes()
      .subscribe( animes => this.animes = animes );

  }

}
