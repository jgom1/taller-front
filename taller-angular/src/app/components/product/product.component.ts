import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:any;
  
  constructor() { }

  ngOnInit(): void {
    this.product = {
      name: 'Apple iPhone 11 ',
      description: '64GB Verde móvil libre',
      oldPrice: 809,
      currentPrice: 699,
      img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/11/00194610401047____1__640x640.jpg'
    }
  }

}
