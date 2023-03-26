import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize, map } from 'rxjs/operators';
import { Game, GameMockClient } from 'src/app/shared';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent implements OnInit {

  @Input('searchBy') tag:string = '';
  gamesData$?: Observable<Game[]>;
	games:Game[] = [];
  
  constructor(
    gameMockClient: GameMockClient,
		public cdRef:ChangeDetectorRef
  ) { 
    this.gamesData$ = gameMockClient.getAll$();
  }

  ngOnInit(): void {
    this.checkIfTagExists();    
  }

  private checkIfTagExists(): void {
    this.tag === '' ? this.loadAllGames() :  this.loadGamesByTag();   
  }

  loadAllGames(): void {
    this.gamesData$!
    .pipe(
      finalize(() => (this.cdRef.markForCheck()))
    )
    .subscribe(
			games => {
				this.games = games;		
        console.log(this.games);        
			}
		)
  }

  loadGamesByTag(): void {
    this.gamesData$!
    .pipe(   
      map((games:Game[])=> {
        return games.filter((game:Game) => (game.tag === 'trending'))
      })
    )
    .subscribe(
			games => {
        this.cdRef.markForCheck();
				this.games = games;            
			}
		)
  }
}
