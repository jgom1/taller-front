import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion-product',
  templateUrl: './promotion-product.component.html',
  styleUrls: ['./promotion-product.component.scss']
})
export class PromotionProductComponent implements OnInit {

  @Input() product: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  public navigateToProduct() {
    this.router.navigate(['/product', this.product.id]);
  }

}
