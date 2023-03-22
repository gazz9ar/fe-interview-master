interface Thumb {
	url:string;
	title:string;
}

export interface Game {
	id: number;
	providerName:string;
	startUrl:string;
	tag:string;
	slug: string;
	title: string;
	thumb:Thumb;
}
