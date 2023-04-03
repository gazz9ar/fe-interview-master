import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { gameFilter } from './components/games-filters/games-filters.component';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared';
import { AppState, selectLastPlayedGames } from 'src/app/state/selectors/Games.selectors';
import { Store } from '@ngrx/store';
import { Unsub } from 'src/app/core/Unsubscription/Unsub';
import { LoadGames } from 'src/app/state/actions/Games.actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GamesComponent extends Unsub implements Unsub{

  gamesToLoad:number = 0;
  disableScrolling:boolean = false;
  showLastPlayedGames:boolean = false;
  lastPlayedGames$:Observable<Game[]> =  new Observable();
  
  constructor(private readonly store:Store<AppState>) { super() }

  ngOnInit(): void {
		this.getLastPlayedGames();
	}

	getLastPlayedGames(): void {	
		this.store.dispatch(LoadGames());
		this.lastPlayedGames$ = this.store.select(selectLastPlayedGames); 
		this.lastPlayedGames$
		.pipe(takeUntil(this.unsubscribe$))
		.subscribe( games => {  
			if(games.length > 0) {
				this.showLastPlayedGames = true;
			}
		});    		  
	}

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
