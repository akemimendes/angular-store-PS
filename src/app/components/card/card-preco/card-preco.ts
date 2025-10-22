import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  imports: [],
  templateUrl: './card-preco.html',
  styleUrl: './card-preco.css'
})
export class CardPreco implements OnInit{

  @Input()
  titulo:string ='';

  @Input()
  tipo_jogo:string ='';

  @Input()
  preco_jogo:string='';

  ngOnInit():void{

  }

}
