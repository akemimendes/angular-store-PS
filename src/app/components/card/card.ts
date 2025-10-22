import { Component, Input, OnInit } from '@angular/core';
import { CardDetalhe } from "./card-detalhe/card-detalhe";
import { CardPreco } from "./card-preco/card-preco";

@Component({
  selector: 'app-card',
  imports: [CardDetalhe, CardPreco],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {


  @Input()
  imagem: string = '';

  @Input()
  texto: string = '';

  @Input()
  tipo_jogo: string = '';

  @Input()
  preco_jogo: string = '';

  ngOnInit(): void {
  }

}
