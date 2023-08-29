import { Component, DoCheck, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MoviesPopupComponent } from '../movies-popup/movies-popup.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  filterTerm!: any;
  moviesData:any;
  moviesDataDisply:any;
  showRefresh = false;

  constructor( private motorService: MoviesService,private dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.getMoviesData();

  
  }
  getMoviesData(){
this.motorService.getMoviesData().subscribe( (res) => {
 this.moviesData = res;
   this.showRefresh = false;

 for(let i = 0; i< this.moviesData.results.length; i++ ){
  let title = this.moviesData.results[i].title
  this.moviesData.results[i].imgaeUrl = "https://ui-avatars.com/api/?name=" + title
 }
 this.moviesDataDisply = this.moviesData.results;
 this.motorService.setMoviesData(this.moviesDataDisply);

}, error => {
 this.showRefresh = true;
})
  }

  // getMoviesImage(){
  //   for( let i=0; i<this.moviesData.results.length; i++){
  //     console.log(this.moviesData.results[i]);
  //     this.motorService.getImageBasedOnMovieName(this.moviesData.results[i].title).subscribe( (res) => {
  //       console.log(res);
  //     })
    
  //    }
  // }

  OpenModalPopUp(id:any){
    const dialogRef = this.dialog.open(MoviesPopupComponent, {
      data: { userList : id},
    });
  }

  refresh(){
    this.getMoviesData();
  }

 
  

}
