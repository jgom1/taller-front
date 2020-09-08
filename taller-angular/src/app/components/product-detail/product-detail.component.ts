import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: 'Apple iPhone 11 ',
      description: `Un nuevo sistema de cámara dual que abarca un campo de visión más amplio.
       El chip más rápido que haya tenido un smart­phone. Una batería que dura todo el día,
       para que hagas más y cargues menos. Y el vídeo de mayor calidad en un smart­phone,
       que hará que tus recuerdos sean aún más inolvidables. El iPhone 11 llega pisando fuerte.`,
      oldPrice: 809,
      currentPrice: 699,
      img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/11/00194610401047____1__640x640.jpg',
      quantity: 0
    }
  }

}
