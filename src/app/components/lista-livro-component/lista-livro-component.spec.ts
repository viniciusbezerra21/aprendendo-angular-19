import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLivroComponent } from './lista-livro-component';

describe('ListaLivroComponent', () => {
  let component: ListaLivroComponent;
  let fixture: ComponentFixture<ListaLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLivroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLivroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
