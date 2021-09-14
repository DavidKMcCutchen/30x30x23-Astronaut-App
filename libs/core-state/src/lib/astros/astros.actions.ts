import { createAction, props } from "@ngrx/store";
import {  Person } from "@astronaut-app/api-interfaces";

// Select Entity

export const selectAstro = createAction(
    '[ASTRO] Select Astro',
    props<{ personId: string }>()
);

// Load all Entities

export const loadAstros = createAction(
    '[ASTRO] Load Astros'
);

export const loadAstrosSuccess = createAction(
    '[ASTRO] Load Astros Success',
    props<{ persons: Person[]}>()
);

export const loadAstrosFailed = createAction(
    '[ASTRO] Load Astros Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadAstro = createAction(
    '[ASTRO] Load Astro',
    props<{ personId: string}>()
);

export const loadAstroSuccess = createAction(
    '[ASTRO] Load Astro Success',
    props<{ person: Person}>()
);

export const loadAstroFailed = createAction(
    '[ASTRO] Load Astro Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createAstro = createAction(
    '[ASTRO] Create Astro',
    props<{ person: Person}>()
);

export const createAstroSuccess = createAction(
    '[ASTRO] Create Astro Success',
    props<{ person: Person}>()
);

export const createAstroFailed = createAction(
    '[ASTRO] Create Astro Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateAstro = createAction(
    '[ASTRO] Update Astro',
    props<{ person: Person}>()
);

export const updateAstroSuccess = createAction(
    '[ASTRO] Update Astro Success',
    props<{ person: Person}>()
);

export const updateAstroFailed = createAction(
    '[ASTRO] Create Astro Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteAstro = createAction(
    '[ASTRO] Delete Astro',
    props<{ person: Person}>()
);

export const deleteAstroSuccess = createAction(
    '[ASTRO] Delete Astro Success',
    props<{ person: Person}>()
);

export const deleteAstroFailed = createAction(
    '[ASTRO] Create Astro Failed',
    props<{ error: any}>()
);