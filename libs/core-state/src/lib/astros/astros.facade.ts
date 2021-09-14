import { Injectable } from "@angular/core";
import { Person } from "@astronaut-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as AstroActions from './astros.actions';
import * as AstroSelectors from './astros.selectors';
import * as fromAstros from './astros.reducer';


@Injectable({
    providedIn: 'root'
})

export class AstroFacade {
    allAstros$ = this.store.pipe(
        map((state) => AstroSelectors.getAllAstros(state)),
    )
    selectedAstros$ = this.store.pipe(select(AstroSelectors.getSelectedAstro));
    loaded$ = this.store.pipe(select(AstroSelectors.getAstrosLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === AstroActions.createAstro({} as any) .type ||
        action.type === AstroActions.updateAstro({} as any) .type ||
        action.type === AstroActions.deleteAstro({} as any) .type
        ))

        selectAstro(personId: string) {
            this.dispatch(AstroActions.selectAstro({ personId }));
        };

        loadAstros() {
            this.dispatch(AstroActions.loadAstros())
        };

        loadAstro(personId: string) {
            this.dispatch(AstroActions.loadAstro({ personId }))
        };

        saveAstro(person: Person) {
            person.name ? this.updateAstro(person) : this.createAstro(person)
        };

        createAstro(person: Person) {
            this.dispatch(AstroActions.createAstro({ person }))
        };

        updateAstro(person: Person) {
            this.dispatch(AstroActions.updateAstro({ person }))
        };

        deleteAstro(person: Person) {
            this.dispatch(AstroActions.deleteAstro({ person }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromAstros.AstroPartialState>,
            private actions$: ActionsSubject
        ) {}
}