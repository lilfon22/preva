import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home.component';
import { AnimesService } from '../../services/animes.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    AnimesService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomeModule { }
