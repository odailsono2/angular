import { Component, input } from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  name = input.required<string>()
  desc = input.required<string>()
  price = input.required<number>()
  img = input.required<string>()


}
