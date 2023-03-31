import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GamesComponent {

  gamesToLoad:number = 0;
  constructor() { }

  onScroll() {  
    this.gamesToLoad += 8;
  }

}
