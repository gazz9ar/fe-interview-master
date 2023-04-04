import { GameMockClient } from './../../../../../shared/client/game-mock.client';
import { AppState, selectLastPlayedGames, selectLoading } from './../../../../../state/selectors/Games.selectors';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Game } from 'src/app/shared';
import { Unsub } from 'src/app/core/Unsubscription/Unsub';
import { Store } from '@ngrx/store';
import { LoadGames, LoadedAllGamesSuccessfully, LoadedPartialGamesSuccessfully } from 'src/app/state/actions/Games.actions';
import { gameFilter } from '../games-filters/games-filters.component';


@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent extends Unsub implements OnInit  {

  @Input('searchByTag') tag:string = '';
  @Input('lastPlayed') lastPlayed:boolean = false;
  @Input('gamesQuantity') gamesQuantity:number = 0;
  @Input('showFilters') showFilters:boolean = false;
  @Output('onFilter') filterEmitter = new EventEmitter<gameFilter>();
  gamesData$?: Observable<Game[]>;
  lastPlayedGames$:Observable<Game[]> =  new Observable();
	games:Game[] = [];
  loading$:Observable<boolean> =  new Observable();
  isLoading: boolean = false;
  firstTimeLoading: boolean = true;
  finishedLoadingAllGames:boolean = false;
  isFirstFiltersChange:boolean = true;
  
  constructor(
    public gameMockClient: GameMockClient,
		public cdRef:ChangeDetectorRef,
    private router:Router,
    private readonly store:Store<AppState>    
  ) { 
    super();
    this.gamesData$ = gameMockClient.getAll$();    
  }

  ngOnChanges(changes:SimpleChanges): void {      
    if(changes['gamesQuantity']){      
      if(!changes['gamesQuantity'].isFirstChange()){       
        this.loadPartialGamesData(changes['gamesQuantity'].currentValue);
      }      
    }      
  }

  ngOnInit(): void {       
    if(!this.showLastPlayedGames() && !this.checkIfTagExists()){
      this.loadPartialGamesData(this.gamesQuantity);
    }
    this.subscribeToLoading();
  }

  private checkIfTagExists(): boolean {   
    if(this.tag !== '' ){
      this.loadGamesByTag(this.tag);
      return true;
    }       
    return false;
  }

  private showLastPlayedGames(): boolean {
    if(this.lastPlayed){
      this.loadGamesByLastPlayed();
      return true;
    }  
    return false;
  }

  loadPartialGamesData(gamesQuantity:number): void {    
    this.store.dispatch(LoadGames());
    this.setFirstTimeLoading(gamesQuantity);
    this.gamesData$!
    .pipe(
      takeUntil(this.unsubscribe$),
      map((games:Game[]) => {
        return games.slice(gamesQuantity,gamesQuantity+8)
      })
    )
    .subscribe(
			(games: Game[]) => {                 
        this.setNewGamesState(games);                    
			}
		)
  }

  setNewGamesState(games:Game[]): void {  
    if(games.length > 0){        
      this.games.push(...games);
      const newArray = Object.assign([], this.games);      
      this.store.dispatch(LoadedPartialGamesSuccessfully({loadedGames:newArray}));
    } else {    
      this.store.dispatch(LoadedAllGamesSuccessfully({loadedGames:this.games}));      
      this.finishedLoadingAllGames = true;     
    }           
    this.runChangeDetection(); 
  }

  runChangeDetection(): void {        
    this.cdRef.markForCheck();   
  }

  loadGamesByTag(tag:string): void {    
    this.store.dispatch(LoadGames());   
    this.gamesData$!
    .pipe(   
      takeUntil(this.unsubscribe$),
      map((games:Game[])=> {
        return games.filter((game:Game) => (game.tag === tag))
      }),      
    )
    .subscribe(
			games => {
        console.log('Partial games',games);   
        this.games = games;
        this.store.dispatch(LoadedAllGamesSuccessfully({loadedGames:this.games}));
        this.runChangeDetection();       
			}
		)
  } 
 
  loadGamesByLastPlayed(): void {
    this.store.dispatch(LoadGames());
    this.lastPlayedGames$ = this.store.select(selectLastPlayedGames); 
    this.lastPlayedGames$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( games => {  
      console.log('Last played games',games);   
      this.games = games;
      this.store.dispatch(LoadedAllGamesSuccessfully({loadedGames:this.games}));
      this.runChangeDetection();
    });    
  }

  navigateToGamesPage(): void {  
    this.router.navigate([`games`]);
  }

  subscribeToLoading(): void {
    this.loading$ = this.store.select(selectLoading); 
		this.loading$
		.pipe(takeUntil(this.unsubscribe$)) 
		.subscribe(
			(loading:boolean) => {			
				this.isLoading = loading;		
				this.cdRef.markForCheck();						
			}
		);	
  }

  setFirstTimeLoading(gamesQuantity:number): void {
    if(gamesQuantity >= 8){
      this.firstTimeLoading = false;          
    }
  }

  filterGames(filters:gameFilter): void {        
    this.filterEmitter.emit(filters);   
    this.gameMockClient.getFilteredGames$(filters)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      filteredGames => {            
        if(filters.gamesNames !== '' || filters.gamesProviders.length > 0){
          this.games = filteredGames;     
          this.runChangeDetection(); 
        }            
      }
    );
  }
}
