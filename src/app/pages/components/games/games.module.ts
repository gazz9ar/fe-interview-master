import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesComponent } from './games.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { GameComponent } from './components/game/game.component';
import { GamesFiltersComponent } from './components/games-filters/games-filters.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
	GamesListComponent,
	GamesComponent,
  GameDescriptionComponent,
  GameComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    GamesFiltersComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule,
		LayoutModule,
		InfiniteScrollModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class GamesModule { }
  