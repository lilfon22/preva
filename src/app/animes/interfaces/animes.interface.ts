import { FavoritosComponent } from '../pages/favoritos/favoritos.component';
export interface Anime {
    id?: string;
    name: string;
    jap_name: string;
    breve: string;
    description: string;
    rating: number;
    episodes: number;
    studio: string;
    categorie: string;
    wtw: string;
    img?: string;
}

export interface Noticias {
    id?: string;
    titulo: string;
    subtitulo: string;
    noticia: string;
    img?: string;
}

export interface Favorito {
    id?: string;
    name: string;
    jap_name: string;
    breve: string;
    description: string;
    rating: number;
    episodes: number;
    studio: string;
    categorie: string;
    wtw: string;
    img?: string;
}