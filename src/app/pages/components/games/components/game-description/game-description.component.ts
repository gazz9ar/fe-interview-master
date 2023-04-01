import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Game } from 'src/app/shared';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '156px',
        'border-radius': '7px'   
      })),    
      transition('open => closed', [       
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class GameDescriptionComponent implements OnInit {

  game!: Game;
  isOpen = false;

  constructor(
    public dialogRef: MatDialogRef<GameDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game,
  ) { 
    this.game = this.data;
  }

  ngOnInit(): void {   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }  

  toggle() {
    this.isOpen = !this.isOpen;
  }

  playGame(url:string): void {
    window.open(url, "_blank");
  }

}
