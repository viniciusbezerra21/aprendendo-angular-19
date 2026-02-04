import { Livro } from "./livro.model";

export interface Genero {
    id: string;
    valor: string;
    livros: Livro[]
}