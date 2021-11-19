import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Anime } from '../../interfaces/animes.interface';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AnimeComponent implements OnInit {

  anime!: Anime;

  constructor( private activatedRoute: ActivatedRoute,
               private animesService: AnimesService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.animesService.getAnimePorId(id) )
      )
      .subscribe( anime => this.anime = anime );

  }

  regresar() {
    this.router.navigate(['/animes/listado']);
  }

}
