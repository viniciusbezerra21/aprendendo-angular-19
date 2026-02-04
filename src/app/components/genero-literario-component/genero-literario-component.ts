import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro";
import { Genero } from '../../models/genero.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-genero-literario-component',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero-literario-component.html',
  styleUrl: './genero-literario-component.css',
})
export class GeneroLiterarioComponent {

  genero = input.required<Genero>(); 

}
