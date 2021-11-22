import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirComponent } from './pages/subir/subir.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'subir', component: SubirComponent },
      { path: 'editar/:id', component: SubirComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: AnimeComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class AnimesRoutingModule { }
