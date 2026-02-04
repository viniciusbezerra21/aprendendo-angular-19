import { Component, OnInit } from '@angular/core';
import { Genero } from '../../models/genero.model';
import { Livro } from '../../models/livro.model';
import { livros } from '../../../mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario-component/genero-literario-component";

@Component({
  selector: 'app-lista-livro-component',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livro-component.html',
  styleUrl: './lista-livro-component.css',
})
export class ListaLivrosComponent implements OnInit{
  generos: Genero[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();
  ngOnInit() {
    this.livrosPorGenero = new Map();
    livros.forEach((livro) => {
      const generoId = livro.genero.id
      if(!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }
      this.livrosPorGenero.get(generoId)?.push(livro)
    })
    this.generos = [
      {
        id: 'romance',
        valor: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      { 
        id: 'filosofia', 
        valor: 'filosofia', 
        livros: this.livrosPorGenero.get("filosofia") ?? [] 
      },
      { 
        id: 'suspense', 
        valor: 'suspense', 
        livros: this.livrosPorGenero.get("suspense") ?? [] 
      },
      {
        id: 'tecnicos',
        valor: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
      {
        id: 'misterio',
        valor: 'Misterio',
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'ficcao-cientifica',
        valor: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      }
    ]
      console.log(this.livrosPorGenero)
    }
  }