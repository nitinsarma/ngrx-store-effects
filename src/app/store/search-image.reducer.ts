import { Action } from '@ngrx/store';
import {SearchActionTypes, SearchActions} from "./search-image.actions";
//import { SearchImage } from './search-image.model';
 
export interface SearchImageState {
    list: [],
    searchQuery: string

  }
  
  
  const initialState: SearchImageState = {
    list: [],
    searchQuery: ''

  };
    


export function searchImageReducer(
    state: SearchImageState = initialState, 
    action: SearchActions
    ) {
        switch (action.type){
            case SearchActionTypes.SEARCH:{
               
                return {
                    ...state,
                    searchQuery: action.payload
                  
                }
            }
            case SearchActionTypes.SEARCH_DONE:{
               
                return {
                    ...state,
                    list: action.payload
                  
                }
            }
            
            default:
                return state;
        }
}