import { ActionReducerMap } from '@ngrx/store';

import { SearchImageState } from './search-image.reducer';


export interface AppState {
  readonly searchImage: SearchImageState;
}


