import { GameDescriptionComponent } from './components/games/components/game-description/game-description.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { GamesComponent } from "./components/games/games.component";



const ROUTES: Routes = [
	{ 
		path: "home", 
		component: HomeComponent		
	},
	{ 
		path: "games", 
		component: GamesComponent		
	},
	{ 
		path: "games/:id", 
		component: GameDescriptionComponent		
	},
	{ 
		path: "**", 
		redirectTo: 'home'		
	},
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {
		// enableTracing: true
	})],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {

}
