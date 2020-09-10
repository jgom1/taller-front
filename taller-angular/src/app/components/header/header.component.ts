import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged: boolean;
  userName: string;
  cardItems: number;

  constructor() { }

  ngOnInit(): void {
    this.logged = false;
    this.userName = 'Comprador';
    this.cardItems = 0;
  }

}
