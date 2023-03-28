import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, filter, finalize, map, takeUntil } from 'rxjs/operators';
import { Game, GameMockClient } from 'src/app/shared';
import { LastPlayedService } from '../../services/last-played.service';
import { LoadingService } from 'src/app/shared/layout/services/loading.service';
import { Unsub } from 'src/app/core/Unsubscription/Unsub';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent extends Unsub implements OnInit  {

  @Input('searchByTag') tag:string = '';
  @Input('lastPlayed') lastPlayed:boolean = false;
  @Input('gamesQuantity') gamesQuantity:number = 8;
  gamesData$?: Observable<Game[]>;
	games:Game[] = [];
  isLoading: boolean = false;
  
  constructor(
    gameMockClient: GameMockClient,
		public cdRef:ChangeDetectorRef,
    private router:Router,
    private lastGamesPlayedService:LastPlayedService, 
    private loadingService:LoadingService,
  ) { 
    super();
    this.gamesData$ = gameMockClient.getAll$();    
  }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes['gamesQuantity']){
      this.loadAllGames(changes['gamesQuantity'].currentValue);
    }      
  }

  ngOnInit(): void {      
    if(!this.checkIfLastPlayedGames() && !this.checkIfTagExists()){
      this.loadAllGames(8);
    }
    this.subscribeToLoading();
  }

  private checkIfTagExists(): boolean {   
    if(this.tag !== '' ){
      this.loadGamesByTag();
      return true;
    }       
    return false;
  }

  private checkIfLastPlayedGames(): boolean {
    if(this.lastPlayed){
      this.loadGamesByLastPlayed();
      return true;
    }  
    return false;
  }

  loadAllGames(gamesQuantity:number): void {
    this.gamesData$!
    .pipe(
      takeUntil(this.unsubscribe$),
      map((games:Game[]) => {
        return games.slice(0,gamesQuantity)
      })
    )
    .subscribe(
			games => {
        this.setGamesAndRunChangeDetection(games);              
			}
		)
  }

  loadGamesByTag(): void {    
    this.loadingService.startLoading();
    this.gamesData$!
    .pipe(   
      takeUntil(this.unsubscribe$),
      map((games:Game[])=> {
        return games.filter((game:Game) => (game.tag === 'trending'))
      })
    )
    .subscribe(
			games => {
        this.setGamesAndRunChangeDetection(games);       
			}
		)
  }

  loadGamesByLastPlayed(): void {
    this.loadingService.startLoading();
    this.lastGamesPlayedService.lastPlayedGames$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( games => {
      this.setGamesAndRunChangeDetection(games);   
    })
  }

  setGamesAndRunChangeDetection(games:Game[]): void {
    this.loadingService.finishLoading();       
    this.games.push(...games);
    this.cdRef.markForCheck();   
  }

  navigateToGamePage(game:Game): void {   
    this.lastGamesPlayedService.addLastPlayedGame(game);
    this.router.navigate([`games/${game.id}`]);
  }

  navigateToGamesPage(): void {  
    this.router.navigate([`games`]);
  }

  subscribeToLoading(): void {
    this.loadingService.loading$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (loading:boolean) => {             
      this.isLoading = loading;
      this.cdRef.markForCheck();
    })
  }
}
