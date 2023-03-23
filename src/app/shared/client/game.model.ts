interface Thumb {
	url:string | null;
	title:string | null;
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
