import { Component, OnInit } from '@angular/core';
import { Noticias } from '../../interfaces/animes.interface';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  noticias: Noticias[] = [];

  constructor( private animesService: AnimesService ) { }

  ngOnInit(): void {

    this.animesService.getNoticias()
      .subscribe( noticias => this.noticias = noticias );

  }

}
