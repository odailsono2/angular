import { Component, input } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';
import { Product } from '../Product';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [ProdutoComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  items = input.required<Product[]>()
  // items = this.produtos
}
