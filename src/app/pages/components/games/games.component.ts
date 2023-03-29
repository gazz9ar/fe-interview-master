import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GamesComponent implements OnInit {

  gamesToLoad:number = 0;
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }

  onScroll() {
    console.log('SCROLLED');    
    this.gamesToLoad += 8;
  }

}
