import { gamesReducer } from './state/reducers/Games.reducer';
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
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
		MaterialModule,
		StoreModule.forRoot({
			games: gamesReducer		
		}),
		StoreDevtoolsModule.instrument({ name: 'REDUX DEVTOOL'})    
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
