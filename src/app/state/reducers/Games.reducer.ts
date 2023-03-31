import { createReducer, on } from '@ngrx/store';
import * as GamesActions from '../actions/Games.actions';
import { Game } from 'src/app/shared';
export interface GamesState {    
    games:Game[];
    lastPlayedGames:Game[];
    loading:boolean;
}

export const initialState: GamesState = {   
    games:[],
    lastPlayedGames: [],
    loading:false
};

export const gamesReducer = createReducer(
    initialState,  
    on(GamesActions.LoadGames, (state:GamesState) => ({ ...state, loading:true })),
    on(GamesActions.LoadedPartialGamesSuccessfully,
        (state:GamesState, {loadedGames}) => ({ ...state, loading: false, games: loadedGames})),
    on(GamesActions.LoadedAllGamesSuccessfully,
        (state:GamesState, {loadedGames}) => ({ ...state, loading: false, games: loadedGames})), 
    on(GamesActions.LoadedLastPlayedGamesSuccessfully,
        (state:GamesState, {lastPlayedGames}) => ({ ...state, loading: false, lastPlayedGames: lastPlayedGames})), 
    on(GamesActions.SaveLastPlayedGame,
        (state:GamesState, {lastPlayedGames}) => ({ ...state, loading: false, lastPlayedGames: lastPlayedGames})), 
  
);

// export const lastPlayedGamesReducer = createReducer(
//     initialState,  
//     on(GamesActions.LoadGames, (state:GamesState) => ({ ...state, loading:true })), 
  
// ); 