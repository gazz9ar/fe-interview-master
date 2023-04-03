import { Component, ChangeDetectionStrategy, OnInit} from "@angular/core";
import { GamesService } from "../games/services/games.service";
import { Store } from "@ngrx/store";
import { AppState, selectLastPlayedGames } from "src/app/state/selectors/Games.selectors";
import { LoadGames } from "src/app/state/actions/Games.actions";
import { Observable } from "rxjs";
import { Game } from "src/app/shared";
import { takeUntil } from "rxjs/operators";
import { Unsub } from "src/app/core/Unsubscription/Unsub";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends Unsub implements OnInit{	

	lastPlayedGames$:Observable<Game[]> =  new Observable();
	showLastPlayedGames:boolean = false;
	
	constructor(private readonly store:Store<AppState>) {
		super();
	}

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

}
