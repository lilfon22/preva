import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Anime, Noticias } from '../interfaces/animes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${ this.baseUrl }/animes`);
  }

  getAnimePorId( id: string ):Observable<Anime> {
    return this.http.get<Anime>(`${ this.baseUrl }/animes/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${ this.baseUrl }/animes?q=${ termino }&_limit=6`);
  }

  agregarAnime( animes: Anime ): Observable<Anime> {
    return this.http.post<Anime>(`${ this.baseUrl }/animes`, anime );
  }

  actualizarAnime( anime: Anime ): Observable<Anime> {
    return this.http.put<Anime>(`${ this.baseUrl }/animes/${ anime.id }`, anime );
  }

  borrarAnime( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/animes/${ id }`);
  }

  getNoticias(): Observable<Noticias[]> {
    return this.http.get<Noticias[]>(`${ this.baseUrl }/noticias`);
  }

}
function anime<T>(arg0: string, anime: any): Observable<Anime> {
  throw new Error('Function not implemented.');
}

