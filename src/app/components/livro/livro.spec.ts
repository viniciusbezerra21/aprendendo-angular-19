import { TestBed, ComponentFixture } from '@angular/core/testing';

import { LivroComponent } from './livro';

describe('LivroComponent', () => {
  let component: LivroComponent;
  let fixture: ComponentFixture<LivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});