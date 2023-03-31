import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MaterialModule } from "../material/material.module";
import { LayoutModule } from "../shared/layout/layout.module";
import { HomeComponent } from "./components/home/home.component";
import { GamesListComponent } from "./components/games/components/games-list/games-list.component";
import { BannerComponent } from "./components/home/components/banner/banner.component";
import { GamesComponent } from './components/games/games.component';
import { GameDescriptionComponent } from './components/games/components/game-description/game-description.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";



const COMPONENTS = [
	HomeComponent,
	GamesListComponent,
	BannerComponent,
	GamesComponent,
	GameDescriptionComponent	
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		MaterialModule,
		LayoutModule,
		InfiniteScrollModule
	],
	declarations: [
		...COMPONENTS,	
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
