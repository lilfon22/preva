import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../interfaces/animes.interface';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: [
  ]
})
export class FavoritosComponent implements OnInit {

  @Input() anime!: Anime;

  constructor(public animesService: AnimesService) { }

  ngOnInit(): void {
  }

  agregarFavorito() {
    this.animesService.disparadorDeFav.emit({        
      anime:this.anime
    });
  }

}
