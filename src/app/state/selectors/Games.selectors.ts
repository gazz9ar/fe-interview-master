import { createSelector } from '@ngrx/store';
import { GamesState } from '../reducers/Games.reducer';
 
export interface AppState {
  games: GamesState;
}
 
export const lastPlayedGames = (state: AppState) => state.games;
 
export const selectLastPlayedGames = createSelector(
    lastPlayedGames,
   (state: GamesState) => state.lastPlayedGames
);

export const selectLoading = createSelector(
    lastPlayedGames,
    (state: GamesState) => state.loading
);