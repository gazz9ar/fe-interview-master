import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs";

import { GameMockClient, Game } from "../../shared";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{

	gamesData$: Observable<Game[]>;
	games:Game[] = [];
	firstGame?:Game;

	constructor(
		gameMockClient: GameMockClient,
		public cdRef:ChangeDetectorRef
	) {
		this.gamesData$ = gameMockClient.getAll$();
	}

	ngOnInit(): void {
		this.gamesData$.subscribe(
			games => {
				this.games = games;
				console.log(this.games);	
				this.firstGame = this.games[0];
				this.cdRef.markForCheck();		

			}
		)
	}

}
