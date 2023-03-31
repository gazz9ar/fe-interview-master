import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MaterialModule } from "../material/material.module";
import { LayoutModule } from "../shared/layout/layout.module";
import { HomeComponent } from "./components/home/home.component";
import { BannerComponent } from "./components/home/components/banner/banner.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { GamesModule } from "./components/games/games.module";



const COMPONENTS = [
	HomeComponent,
	BannerComponent,
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		MaterialModule,
		LayoutModule,
		InfiniteScrollModule,
		GamesModule
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
