import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AnimesRoutingModule } from './animes-routing.module';
import { MaterialModule } from '../material/material.module';

import { SubirComponent } from './pages/subir/subir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AnimeTarjetaComponent } from './components/anime-tarjeta/anime-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HomeModule } from './pages/home/home.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';


@NgModule({
  declarations: [
    SubirComponent,
    BuscarComponent,
    AnimeComponent,
    ListadoComponent,
    AnimeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
    FavoritosComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    AnimesRoutingModule,
    HomeModule
  ]
})
export class AnimesModule { }
