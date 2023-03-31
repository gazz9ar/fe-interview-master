import { GameDescriptionComponent } from './components/games/components/game-description/game-description.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { GamesComponent } from "./components/games/games.component";
import { GeneralLayoutComponent } from '../shared/layout/component/general/general.component';



const ROUTES: Routes = [
	{
		path: '',
		component:GeneralLayoutComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'games',
				component: GamesComponent
			}
		]
	},
	{ 
		path: "**", 
		redirectTo: 'home'		
	}
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {
		scrollPositionRestoration: 'enabled',
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {

}
