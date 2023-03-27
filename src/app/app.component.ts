import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { LoadingService } from "./shared/layout/services/loading.service";

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
export class AppComponent {
	isLoading:boolean = false;
	constructor(
		private loadingService:LoadingService,
		private _cdRef: ChangeDetectorRef
		) {
		loadingService.loading$		
		.subscribe(
			loading => {							
				this.isLoading = loading;		
				this._cdRef.markForCheck();	
			}
		)
	}
}
