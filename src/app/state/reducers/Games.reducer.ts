import { createReducer, on } from '@ngrx/store';
import * as GamesActions from '../actions/Games.actions';
import { Game } from 'src/app/shared';

export interface GameType {
    type: string,
    data: Game[]
}

export interface GamesState {    
    games:GameType;
    loading:boolean;
}

export const initialState: GamesState = {   
    games:{
        type: '',
        data: []
    },
    loading:false
};

export const gamesReducer = createReducer(
    initialState,  
    on(GamesActions.LoadGames, (state:GamesState) => ({ ...state, loading:true  })),
    on(GamesActions.LoadedPartialGamesSuccessfully, (state:GamesState, {loadedGames}) => ({ ...state, loading: false, games: { type: '' , data: loadedGames} })),
    on(GamesActions.LoadedAllGamesSuccessfully, (state:GamesState, {loadedGames}) => ({ ...state, loading: false, games: { type: '' , data: loadedGames} })),
    on(GamesActions.LoadedTrendingGamesSuccessfully, (state:GamesState, {trendingGames}) => ({ ...state, loading: false, games: { type: '' , data: trendingGames} })),
    on(GamesActions.LoadedLastPlayedGamesSuccessfully, (state:GamesState, {lastPlayedGames}) => ({ ...state, loading: false, games: { type: '' , data: lastPlayedGames} }))  
);
