import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import{SearchServiceService } from '../search-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFavouriteComponent } from '../add-favourite/add-favourite.component';
import { AppState } from '../store/app.reducer';
import { SearchImage } from '../store/search-image.model';
import {LoadSearchAction, SearchImageSuccessAction } from '../store/search-image.actions';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  searchImage: Observable<Array<SearchImage>>;
/*   loading$: Observable<Boolean>;
  error$: Observable<Error> */
  favImage = [];
  image:any;
  display: boolean = false;
  isDisable: boolean = true;
   
  constructor(private service :SearchServiceService,
    private store: Store<AppState>,
     private dialog: MatDialog) { 
   
  }

  ngOnInit() {
    this.searchImage = this.store.select(store => store.searchImage.list);
    //console.log(this.searchImage);
    this.store.dispatch(new LoadSearchAction(''));

  }

  addSelected(i):void {
    this.isDisable = false;
    const dialogRef=this.dialog.open(AddFavouriteComponent , {   
        width:'500px',
        height:'200px',
        data:this.searchImage[i]
        
    });
    dialogRef.afterClosed().subscribe(result=> {
      console.log(result)
    });
}
  
  search(query) {
  this.store.dispatch(new SearchImageSuccessAction(query));
  this.service.getSearchResult(query).subscribe(result =>{
  console.log(result);
  this.searchImage = result["results"];
 
  })  
  }
  
 

}
