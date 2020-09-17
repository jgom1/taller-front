import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: any[];
  @Input() showSearch: boolean;

  constructor() { }

  ngOnInit(): void {}

}
