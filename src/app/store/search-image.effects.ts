import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {LoadSearchAction, SearchImageSuccessAction, SearchActionTypes} from './search-image.actions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchServiceService } from '../search-service.service'
import { query } from '@angular/animations';

@Injectable()
export class SearchImageEffects {
    constructor(
        private actions$: Actions,
        private searchService: SearchServiceService
        ) {}
@Effect()
getSearchResult$ = this.actions$
.pipe(
    ofType<LoadSearchAction>(SearchActionTypes.SEARCH_DONE),
    mergeMap(
        (data) => this.searchService.getSearchResult(data.payload)
        .pipe(
            map((data)=>
                new SearchImageSuccessAction(data['results'])
            )
        )
    )
)
   
}


    

   
