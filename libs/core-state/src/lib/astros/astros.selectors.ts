import { createFeatureSelector, createSelector } from "@ngrx/store";
import { astroAdapter, AstroState, ASTRO_FEATURE_KEY } from "./astros.reducer";
import { emptyPerson } from "@astronaut-app/api-interfaces";

export const getAstroState = createFeatureSelector<AstroState>(ASTRO_FEATURE_KEY);

const { selectAll, selectEntities } = astroAdapter.getSelectors();

export const getAstrosLoaded = createSelector(
    getAstroState,
    (state: AstroState) => state.loaded
);

export const getAstroError = createSelector(
    getAstroState,
    (state: AstroState) => state.error
);

export const getAllAstros = createSelector(
    getAstroState,
    (state: AstroState) => selectAll(state)
);

export const getAstroEntities = createSelector(
    getAstroState,
    (state: AstroState) => selectEntities(state)
);

export const getSelectedAstroId = createSelector(
    getAstroState,
    (state: AstroState) => state.selectedId
);

export const getSelectedAstro = createSelector(
    getAstroEntities,
    getSelectedAstroId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyPerson
);