import { Component, OnInit } from '@angular/core';
import { Favorito } from '../../interfaces/animes.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: [
  ]
})
export class FavoritosComponent implements OnInit {

  favorito: Favorito[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
