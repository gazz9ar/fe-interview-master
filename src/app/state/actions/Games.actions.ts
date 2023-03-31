import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/shared';

export const LoadGames = createAction(
  '[GAMES] Request games data'
);

export const LoadedPartialGamesSuccessfully = createAction(
    '[GAMES] Loaded partial games data',    
    props<{ loadedGames:Game[] }>()
);

export const LoadedAllGamesSuccessfully = createAction(
    '[GAMES] Loaded ALL games data',    
    props<{ loadedGames:Game[]  }>()
);

export const LoadedLastPlayedGamesSuccessfully = createAction(
    '[GAMES] Loaded LAST PLAYED games data',    
    props<{ lastPlayedGames:Game[] }>()
);

export const SaveLastPlayedGame = createAction(
    '[GAMES] Save game as last played',    
    props<{ lastPlayedGames:Game[] }>()
);