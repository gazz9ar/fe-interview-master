import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesComponent } from './games.component';

const COMPONENTS = [
	GamesListComponent,
	GamesComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule,
		LayoutModule,
		InfiniteScrollModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class GamesModule { }
  