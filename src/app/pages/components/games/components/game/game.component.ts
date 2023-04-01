import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { MatDialog } from '@angular/material/dialog';
import { LastPlayedService } from '../../services/last-played.service';

@Component({
  selector: 'casino-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {

  @Input('gameToDisplay') game!:Game;

  constructor(
    private dialog:MatDialog,
    private lastGamesPlayedService:LastPlayedService, 
    ) { }

  ngOnInit(): void { 
  }

  openGameDescription(game:Game): void {
    this.dialog.open(GameDescriptionComponent, {
      data: game
    });
    this.addToLastPlayedGameList(game);
  }

  private addToLastPlayedGameList(game:Game): void {   
    this.lastGamesPlayedService.addLastPlayedGame(game);
  }

}
