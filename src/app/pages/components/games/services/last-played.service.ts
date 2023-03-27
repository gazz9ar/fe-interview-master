import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class LastPlayedService {

  private lastPlayedGamesSubject:BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);
  public lastPlayedGames$:Observable<Game[]> = this.lastPlayedGamesSubject.asObservable(); 

  constructor() { 
    this.getLastPlayedGamesFromLocalStorage();
  }

  public getLastPlayedGamesFromLocalStorage(): Game[] {
    const lastPlayedGames = localStorage.getItem('lastPlayedGames');
    if(lastPlayedGames){
      this.lastPlayedGamesSubject.next(JSON.parse(lastPlayedGames));
      return JSON.parse(lastPlayedGames);
    } else {
      return [];
    }
  }

  addLastPlayedGame(game:Game): void {       
    const lastPlayedGames = this.getLastPlayedGamesFromLocalStorage();   
    if(this.isRepeatedGame(lastPlayedGames,game)){
      return;
    }
    lastPlayedGames.unshift(game);
    this.checkLastPlayedGamesQuantity(lastPlayedGames);       
    localStorage.setItem('lastPlayedGames',JSON.stringify(lastPlayedGames));
    this.lastPlayedGamesSubject.next(lastPlayedGames);
  }

  checkLastPlayedGamesQuantity(games:Game[]): void {
    if(games.length > 5){
      games.pop();
    }
  }

  isRepeatedGame(lastPlayedGames:Game[], gameToFind:Game): boolean {
    const found = lastPlayedGames.find((game:Game) => (game.id === gameToFind.id))
    if(found){
      return true;
    } else {
      return false;
    }
  }  

}
