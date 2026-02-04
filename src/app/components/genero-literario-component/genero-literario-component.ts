import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro";
import { livros } from '../../../mock-livros';
import { Genero } from '../../models/genero.model';

@Component({
  selector: 'app-genero-literario-component',
  imports: [LivroComponent],
  templateUrl: './genero-literario-component.html',
  styleUrl: './genero-literario-component.css',
})
export class GeneroLiterarioComponent {

  genero = input.required<Genero>(); 

}
