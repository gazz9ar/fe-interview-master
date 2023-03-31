import { Unsub } from 'src/app/core/Unsubscription/Unsub';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AppState, selectLoading } from './state/selectors/Games.selectors';
import { Store } from '@ngrx/store';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
		#progress-bar {
			z-index:999;
			position:fixed;
			top: 33px;
		}
	`]
})
export class AppComponent extends Unsub implements OnInit{
	isLoading:boolean = false;
	loading$:Observable<boolean> =  new Observable();
	constructor(	
		private _cdRef: ChangeDetectorRef,
		private readonly store:Store<AppState>
		) {			
		super();		
	}

	ngOnInit(): void {
		this.subscribeToLoadingService();
	}

	subscribeToLoadingService(): void {	 
		this.loading$ = this.store.select(selectLoading); 
		this.loading$
		.pipe(takeUntil(this.unsubscribe$)) 
		.subscribe(
			(loading:boolean) => {			
				this.isLoading = loading;		
				this._cdRef.markForCheck();						
			}
		);	
	}
}
