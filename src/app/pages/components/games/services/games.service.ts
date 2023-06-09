import { LoadedLastPlayedGamesSuccessfully, SaveLastPlayedGame } from '../../../../state/actions/Games.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/shared';
import { gameFilter } from '../components/games-filters/games-filters.component';

@Injectable({
  providedIn: 'root'
})
export class GamesService { 

  constructor(
    private store:Store
  ) { 
    this.getLastPlayedGamesFromLocalStorage();
  }

  private getLastPlayedGamesFromLocalStorage(): Game[] {
    const lastPlayedGamesJSON = localStorage.getItem('lastPlayedGames');  
    if(lastPlayedGamesJSON){
      const lastPlayedGames = JSON.parse(lastPlayedGamesJSON);
      this.store.dispatch(LoadedLastPlayedGamesSuccessfully({lastPlayedGames}))
      return lastPlayedGames;
    } else {
      return [];
    }
  }

  public addLastPlayedGame(game:Game): void {  
    let lastPlayedGames = this.getLastPlayedGamesFromLocalStorage();   
    if(this.isRepeatedGame(lastPlayedGames,game)){
      return;
    }
    lastPlayedGames = Object.assign([], lastPlayedGames);
    lastPlayedGames.unshift(game);
    this.checkLastPlayedGamesQuantity(lastPlayedGames);       
    localStorage.setItem('lastPlayedGames',JSON.stringify(lastPlayedGames));    
    this.store.dispatch(SaveLastPlayedGame({lastPlayedGames}));
  }

  private checkLastPlayedGamesQuantity(games:Game[]): void {
    if(games.length > 5){
      games.pop();
    }
  }

  private isRepeatedGame(lastPlayedGames:Game[], gameToFind:Game): boolean {
    const found = lastPlayedGames.find((game:Game) => (game.id === gameToFind.id))
    return found ? true : false;
  }  

  public setCurrentFilterInLocalStorage(filters:gameFilter): void {
    localStorage.setItem('filters', JSON.stringify(filters));
  }

  public getFiltersFromLocalStorage(): gameFilter | null {
    const localStorageFilters = JSON.parse(localStorage.getItem('filters') ?? '');
    if(localStorageFilters){
      return localStorageFilters;
    } else {
      return null;
    }   
  }

}
