import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { ListaLivrosComponent } from "./components/lista-livro-component/lista-livro-component";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaLivrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('aprendendo-angular-19');
}
