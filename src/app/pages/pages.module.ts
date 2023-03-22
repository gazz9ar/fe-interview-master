import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";

import { AppPagesRoutingModule } from "./pages-routing.module";
import { MaterialModule } from "../material/material.module";
import { LayoutModule } from "../shared/layout/layout.module";

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
		...COMPONENTS
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
