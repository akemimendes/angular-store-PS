import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detalhe',
  imports: [],
  templateUrl: './card-detalhe.html',
  styleUrl: './card-detalhe.css'
})
export class CardDetalhe implements OnInit {

  @Input()
  texto:string='';

  ngOnInit(): void {
  }

}
