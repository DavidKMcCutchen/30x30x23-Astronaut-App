import { Person } from "@astronaut-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as AstroActions from './astros.actions';

export const ASTRO_FEATURE_KEY = 'astros';

export interface AstroState extends EntityState<Person> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface AstroPartialState {
    readonly [ASTRO_FEATURE_KEY]: AstroState
};

export const astroAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({selectId: (astro) => astro.name});

export const initialAstroState: AstroState = astroAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): AstroState => ({ ...state, error});

const onDispatch = (state, action): AstroState => ({
    ...state,
    loaded: false,
    error: null
});

const _astroReducer = createReducer(
    initialAstroState,
    on(
        AstroActions.loadAstroFailed,
        AstroActions.loadAstrosFailed,
        AstroActions.createAstroFailed,
        AstroActions.updateAstroFailed,
        AstroActions.deleteAstroFailed,
        onFailed
    ),
    on(
        AstroActions.loadAstro,
        AstroActions.loadAstros,
        AstroActions.createAstro,
        AstroActions.updateAstro,
        AstroActions.deleteAstro,
        onDispatch
    ),
    on(
        AstroActions.loadAstroSuccess, (state, { person }) =>
        astroAdapter.upsertOne(person, {...state, loaded: true})
    ),
    on(
        AstroActions.selectAstro, (state, { personId }) => ({
            ...state,
            selectedId: personId
        })
    ),
    on(
        AstroActions.loadAstrosSuccess, (state, { persons }) =>
        astroAdapter.setAll(persons, {...state, loaded: true})
    ),
    on(
        AstroActions.deleteAstroSuccess, (state, { person }) =>
        astroAdapter.removeOne(person.name, {...state, loaded: true})
    ),
    on(
        AstroActions.updateAstroSuccess, (state, { person }) =>
        astroAdapter.updateOne(
            {id: person.name, changes: person},
            {...state, loaded: true}
        )
    ),
    on(
        AstroActions.createAstroSuccess, (state, {person }) =>
        astroAdapter.addOne(person, {...state, loaded: true})
    ),
)

export function astroReducer(
    state: AstroState | undefined,
    action: Action
) {
    return _astroReducer(state, action)
}