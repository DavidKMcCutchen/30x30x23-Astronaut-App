import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Person } from "@astronaut-app/api-interfaces";
import { AstroService } from "@astronaut-app/core-data";
import * as AstroActions from './astros.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class AstroEffects{
    loadAstro$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AstroActions.loadAstro),
            fetch({
                run: (action) =>
                    this.astroService
                        .getOne(action.personId)
                        .pipe(map((person: Person) => AstroActions.loadAstroSuccess({ person }))),
                    onError: (action, error) => AstroActions.loadAstroFailed({ error })
            })
        ));
    loadAstros$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AstroActions.loadAstros),
            fetch({
                run: () =>
                    this.astroService
                    .getAll()
                    .pipe(
                        map((persons: Person[]) => AstroActions.loadAstrosSuccess({ persons }))
                    ),
                onError: (action, error) => AstroActions.loadAstrosFailed({ error })    
            })
        ));
    //     createAstro$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(AstroActions.createAstro),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.astroService
    //                     .create(action.person)
    //                     .pipe(map((person: Person) => AstroActions.createAstroSuccess({ person }))),
    //                 onError: (action, error) => AstroActions.createAstroFailed({ error })    
    //         })
    // ));

    // updateAstro$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(AstroActions.updateAstro),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.astroService
    //                     .update(action.person)
    //                     .pipe(map((person: Person) => AstroActions.updateAstroSuccess({ person}))),
    //                 onError: (action, error) => AstroActions.updateAstroFailed({ error })    
    //         })
    // ));

    // deleteAstro$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(AstroActions.deleteAstro),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.astroService
    //                     .delete(action.person)
    //                     .pipe(
    //                         map(() => AstroActions.deleteAstroSuccess({ person: action.person }))
    //                     ),
    //                 onError: (action, error) => AstroActions.deleteAstroFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private astroService: AstroService
    ) {}    
}