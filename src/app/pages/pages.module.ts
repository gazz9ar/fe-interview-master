import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MaterialModule } from "../material/material.module";
import { LayoutModule } from "../shared/layout/layout.module";
import { HomeComponent } from "./components/home/home.component";
import { GamesListComponent } from "./components/games/components/games-list/games-list.component";
import { BannerComponent } from "./components/home/components/banner/banner.component";



const COMPONENTS = [
	HomeComponent,
	GamesListComponent,
	BannerComponent
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		MaterialModule,
		LayoutModule
	],
	declarations: [
		...COMPONENTS	
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
