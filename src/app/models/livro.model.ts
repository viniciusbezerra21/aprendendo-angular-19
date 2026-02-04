import { Genero } from "./genero.model";

export interface Livro {
    titulo: string;
    autor: string;
    favorito: boolean;
    genero: Genero;
    imagem: string;

}
