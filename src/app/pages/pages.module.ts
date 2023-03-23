import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MaterialModule } from "../material/material.module";
import { LayoutModule } from "../shared/layout/layout.module";
import { GamesListComponent } from './games/games-list/games-list.component';
import { BannerComponent } from './home/banner/banner.component';

const COMPONENTS = [
	HomeComponent,
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		MaterialModule,
		LayoutModule
	],
	declarations: [
		...COMPONENTS,
  GamesListComponent,
  BannerComponent
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
