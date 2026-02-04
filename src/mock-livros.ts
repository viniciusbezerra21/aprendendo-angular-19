import { Livro } from "./app/models/livro.model"

export const livros: Livro[] = [
  {
    titulo: "As Ondas",
    autor: "Virginia Woolf",
    favorito: false,
    genero: {
        id: "romance", 
        valor: "Romance",
        livros: []
    },
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg"
  },
  {
    titulo: "O Livro do Desespero",
    autor: "Stephen King",
    favorito: false,
    genero: {
        id: "suspense", 
        valor: "Suspense",
        livros: []
    },
    imagem: "https://m.media-amazon.com/images/I/61+h4rlo37L._UF1000,1000_QL80_.jpg"
  },
  {
    titulo: "A Revolta de Atlas",    
    autor: "Ayn Rand",
    favorito: false,
    genero: {
        id: "filosofia", 
        valor: "Filosofia",
        livros: []
    },
    imagem: "https://m.media-amazon.com/images/I/61R8bWX3YDL.jpg" ,

  }
]