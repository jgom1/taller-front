import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public navigateToProduct(): void {
    this.router.navigate(['product', this.product.id]);
  }

}
