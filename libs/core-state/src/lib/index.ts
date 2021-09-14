import { ActionReducerMap } from "@ngrx/store";
import * as fromAstros from './astros/astros.reducer';

export interface AppState {
    [fromAstros.ASTRO_FEATURE_KEY]: fromAstros.AstroState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromAstros.ASTRO_FEATURE_KEY]: fromAstros.astroReducer
};