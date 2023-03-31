import { Unsub } from 'src/app/core/Unsubscription/Unsub';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { takeUntil } from "rxjs/operators";

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
	constructor(	
		private _cdRef: ChangeDetectorRef
		) {			
		super();		
	}

	ngOnInit(): void {
		this.subscribeToLoadingService();
	}

	subscribeToLoadingService(): void {	
		// this.loadingService.loading$		
		// .pipe(takeUntil(this.unsubscribe$)) 
		// .subscribe(
		// 	(loading:boolean) => {										
		// 		this.isLoading = loading;		
		// 		this._cdRef.markForCheck();	
		// 	}
		// );
	}
}
