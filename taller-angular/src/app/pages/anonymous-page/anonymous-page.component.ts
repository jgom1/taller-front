import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anonymous-page',
  templateUrl: './anonymous-page.component.html',
  styleUrls: ['./anonymous-page.component.scss']
})
export class AnonymousPageComponent implements OnInit {

  public paragraphs: number[];

  constructor() { }

  ngOnInit(): void {
    this.paragraphs = new Array(10).fill(0)
  }

}
