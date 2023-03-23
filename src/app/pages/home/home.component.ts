import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, HostListener } from "@angular/core";
import { Observable } from "rxjs";

import { GameMockClient, Game } from "../../shared";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{	

	// @HostListener('window:scroll', ['$event']) // for window scroll events
	// onScroll(event:any) {
	// 	console.log(event);
		
	// }

	constructor() {
		
	}

	ngOnInit(): void {
		
	}

}
