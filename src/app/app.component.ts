import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { LoadingService } from "./shared/services/loading.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
		#progress-bar {
			z-index:999;
			position:absolute;
			top: 33px;
		}
	`]
})
export class AppComponent {
	isLoading:boolean = false;
	constructor(
		private loadingService:LoadingService,
		private _cdRef: ChangeDetectorRef
		) {
		loadingService.loading$		
		.subscribe(
			loading => {		
				console.log(new Date().getTime());
				
				this._cdRef.markForCheck();		
				this.isLoading = loading;		
				this._cdRef.markForCheck();		
			}
		)
	}
}
