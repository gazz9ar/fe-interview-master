import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { GeneralLayoutComponent } from '../shared/layout/component/general/general.component';
import { AgeGuard } from "../core/guards/age.guard";



const ROUTES: Routes = [
	{
		path: '',
		component:GeneralLayoutComponent,
		canActivateChild: [AgeGuard],
		children: [
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'games',
				loadChildren: () => import('./components/games/games.module').then(m => m.GamesModule)
			}
		]
	},
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "**",  redirectTo: "home"},
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
