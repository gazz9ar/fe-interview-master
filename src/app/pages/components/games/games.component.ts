import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { gameFilter } from './components/games-filters/games-filters.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GamesComponent {

  gamesToLoad:number = 0;
  disableScrolling:boolean = false;
  constructor() { }

  onScroll() {  
    this.gamesToLoad += 8;
  }

  handleScrolling(filters:gameFilter): void {
    if(filters.gamesNames !== '' || filters.gamesProviders.length > 0){
      this.disableScrolling = true;
    } else {
      this.disableScrolling = false;
    }
  }

}
