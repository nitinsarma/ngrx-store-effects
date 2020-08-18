import { Component, OnInit, Inject} from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";



@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {
  listName : any = "";
  list:string = "";
  data:any;
  link:String;
  favImages : any;
  pageUrl: any;
  imageName: any;
  val1: any;
  display: boolean;
  list1: any;
  listValues: any = [];
  list2: any;
  lists = [];
  object: { name: any; imageUrl: any; };
  showInput: boolean;
  favList: boolean;
  favLists: any[];
  constructor(private service :SearchServiceService,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<AddFavouriteComponent>,@Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
    //this.link = data.pageURL
  this.pageUrl = data.user.name
  this.imageName = data.alt_description;


    console.log(data);
  }
 
  ngOnInit(): void {
    this.lists = this.service.receiveData();
    if(this.lists.length != 0){
    this.favList = true;
    this.favLists = [...new Set(this.lists.map(x=>x.name))]
    }
    console.log(this.lists);
  }
  addSelected(){
    this.service.sendData(this.data)
    
  }
  
  onRadioBtnClick(list) {
    this.val1 = list;
  }
  addToFavourities(listName){
    // if(listName === undefined){
        // alert("Input field cannot be empty")
    // }else{
      console.log(this.list)
      this.object = {"name":this.listName,"imageUrl":this.data.urls.small}
      this.service.sendData(this.object);
    // }
  }
  addToExisting(listName){
    console.log(listName)
    this.object = {"name":listName,"imageUrl":this.data.urls.small}
    this.service.sendData(this.object);
  }
  addNewList(){
    this.showInput = true
  }  
 
}
