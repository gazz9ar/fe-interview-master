import { Component, ChangeDetectionStrategy, OnInit} from "@angular/core";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{	

	constructor() {
		
	}

	ngOnInit(): void {
		
	}

}
