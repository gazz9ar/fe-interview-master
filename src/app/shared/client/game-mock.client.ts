import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "./game.model";
import { gameFilter } from "src/app/pages/components/games/components/games-filters/games-filters.component";
import { distinct, map, pluck } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class GameMockClient {

	private readonly dataURL = "assets/game.mock-data.json";

	constructor(
		private http: HttpClient
	) {
	}

	getAll$(): Observable<Game[]> {
		return this.http.get<Game[]>(this.dataURL);
	}

	getFilteredGames$(filters:gameFilter): Observable<Game[]> {
		const params = new HttpParams()
		.set('title',filters.gamesNames)
		// .set('provider',filters.gamesProviders);

		return this.http.get<Game[]>(this.dataURL, {params})
		.pipe(
			map( (games:Game[]) => {
				return games.filter( (game) => (game.title.toLowerCase().includes(filters.gamesNames.toLowerCase())))
			  })
		);
	}

	getProviders$(): Observable<string[]> {
		return this.http.get<Game[]>(this.dataURL)
		.pipe(  		
			map((games: Game[]) => games.map(game => game.providerName))		
		);
	}
}
