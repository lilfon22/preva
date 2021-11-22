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
    img?: string;
}

export interface Noticias {
    id?: string;
    titulo: string;
    subtitulo: string;
    noticia: string;
    img?: string;
}