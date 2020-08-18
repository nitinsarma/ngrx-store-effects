import { Action } from '@ngrx/store';
import { SearchImage } from './search-image.model';

export const SEARCH = 'Image Search';
export const SEARCH_DONE = 'Image Search Done';

export enum SearchActionTypes {
    SEARCH = 'Image Search',
    SEARCH_DONE = 'Image Search Done'
  }
  
  export class LoadSearchAction implements Action {
    readonly type = SearchActionTypes.SEARCH
    constructor(public payload: string) { }
    
  }
  export class SearchImageSuccessAction implements Action {
    readonly type = SearchActionTypes.SEARCH_DONE
  
    constructor(public payload: Array<SearchImage>) { }
  }
  

  export type SearchActions = LoadSearchAction | SearchImageSuccessAction;