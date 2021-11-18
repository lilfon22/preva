import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AnimesRoutingModule } from './animes-routing.module';
import { MaterialModule } from '../material/material.module';

import { SubirComponent } from './pages/subir/subir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AnimeTarjetaComponent } from './components/anime-tarjeta/anime-tarjeta.component';


@NgModule({
  declarations: [
    SubirComponent,
    BuscarComponent,
    AnimeComponent,
    HomeComponent,
    ListadoComponent,
    AnimeTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    AnimesRoutingModule
  ]
})
export class HeroesModule { }
