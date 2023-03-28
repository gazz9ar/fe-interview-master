import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gamesToLoad:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onScroll() {
    this.gamesToLoad += 8;
  }

}
