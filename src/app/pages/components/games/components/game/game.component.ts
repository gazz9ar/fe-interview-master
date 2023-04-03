import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Game } from 'src/app/shared';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { MatDialog } from '@angular/material/dialog';
import { GamesService } from '../../services/games.service';
import { AppState } from 'src/app/state/selectors/Games.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'casino-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {

  @Input('gameToDisplay') game!:Game;
  @Input('showHoverEffect') showHoverEffect:boolean = true;

  constructor(
    private dialog:MatDialog,
    private gamesService:GamesService,
    private _cdRef:ChangeDetectorRef
    ) { }

  ngOnChanges(changes:SimpleChanges): void {

    if(changes['showHoverEffect']){     
      if(changes['showHoverEffect'].currentValue === false){                
        this._cdRef.markForCheck();
      }
    }    
  }

  openGameDescription(game:Game): void {
    this.dialog.open(GameDescriptionComponent, {
      data: game,    
    });
    this.addToLastPlayedGameList(game);
  }

  private addToLastPlayedGameList(game:Game): void {   
    this.gamesService.addLastPlayedGame(game);
  
  }

}
