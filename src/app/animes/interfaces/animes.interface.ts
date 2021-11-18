import { Url } from "url";

export interface Anime {
    id?: string;
    name: string;
    description: string;
    rating: number;
    episodes: number;
    studio: string;
    img: string;
}