import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppPagesModule } from "./pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { HttpErrorInterceptor } from "./core/interceptors/http-error.interceptor";


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		BrowserModule,
		AppPagesModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [
		{
		  provide: HTTP_INTERCEPTORS,
		  useClass: HttpErrorInterceptor,
		  multi: true
		} 
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
