import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { SavedImagesComponent } from './saved-images/saved-images.component';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
//import { StoreDevtools } from '@ngrx/store-devtools';
import { searchImageReducer } from './store/search-image.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SearchImageEffects } from './store/search-image.effects';
import * as fromApp from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    AddFavouriteComponent,
    SavedImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot({
      search: searchImageReducer
    }), //earlier provideStore now depreciated so use forRoot()
    EffectsModule.forRoot([SearchImageEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    
  ],
  providers: [],
  entryComponents:[AddFavouriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
