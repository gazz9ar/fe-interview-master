import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  gamesData$?: Observable<Game[]>;
	games:Game[] = [];
  isLoading: boolean = false;
  
  constructor(
    gameMockClient: GameMockClient,
		public cdRef:ChangeDetectorRef,
    private router:Router,
    private lastGamesPlayedService:LastPlayedService,
    private _cdRef: ChangeDetectorRef,
    private loadingService:LoadingService
  ) { 
    super();
    this.gamesData$ = gameMockClient.getAll$();    
  }

  ngOnInit(): void {   
    this.checkIfTagExists();    
    this.checkIfLastPlayedGames();
    this.subscribeToLoading();
  }

  private checkIfTagExists(): void {    
    this.tag === '' ? '' :  this.loadGamesByTag();   
  }

  private checkIfLastPlayedGames():void {
    !this.lastPlayed ? '' :  this.loadGamesByLastPlayed();  
  }

  loadAllGames(): void {
    this.gamesData$!
    .pipe(
      finalize(() => (this.cdRef.markForCheck()))
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
    this.games = games;
    this.cdRef.markForCheck();   
  }

  navigateToGamePage(game:Game): void {
    this.lastGamesPlayedService.addLastPlayedGame(game);
    this.router.navigate([`games/${game.id}`]);
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
