import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, AfterViewInit} from "@angular/core";
import { GamesService } from "../games/services/games.service";
import { Store } from "@ngrx/store";
import { AppState, selectLastPlayedGames } from "src/app/state/selectors/Games.selectors";
import { LoadGames } from "src/app/state/actions/Games.actions";
import { Observable } from "rxjs";
import { Game } from "src/app/shared";
import { delay, takeUntil } from "rxjs/operators";
import { Unsub } from "src/app/core/Unsubscription/Unsub";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends Unsub{	

	lastPlayedGames$:Observable<Game[]> =  new Observable();
	showLastPlayedGames:boolean = false;
	
	constructor(
		private readonly store:Store<AppState>,
		private _cdRef:ChangeDetectorRef
		) {
		super();
	}

	ngAfterContentInit(): void {
		this.getLastPlayedGames();
	}

	getLastPlayedGames(): void {	
		this.store.dispatch(LoadGames());
	
		this.lastPlayedGames$ = this.store.select(selectLastPlayedGames); 
		this.lastPlayedGames$
		.pipe(
			takeUntil(this.unsubscribe$),
			delay(300)
		)
		.subscribe( games => {		
			if(games.length > 0) {
				this.showLastPlayedGames = true;				
			}
			this._cdRef.markForCheck();
		});  
		
	
	
		  		  
	}

}
