import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Inject } from '@angular/core'
import { MoviesService } from '../movies.service';


interface Movies {
  "title": string,
  "description": string,
  "genres": string,
  "uuid": string,
  "imgaeUrl":string,
}

@Component({
  selector: 'app-movies-popup',
  templateUrl: './movies-popup.component.html',
  styleUrls: ['./movies-popup.component.css']
})
export class MoviesPopupComponent implements OnInit {

  moviesPopUpData:any;
  moviesPopUpUi: any[] = [];

  constructor(private service:MoviesService,public dialogRef: MatDialogRef<MoviesPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

  ngOnInit(): void {

    this.service.observer$.subscribe( (res) => {
     this.moviesPopUpData = res;
     for(let i=0; i<this.moviesPopUpData.length; i++){
      if(this.moviesPopUpData[i].uuid == this.data.userList){
        let movie: Movies = {
          "title": this.moviesPopUpData[i].title,
          "description":this.moviesPopUpData[i].description,
          "genres":this.moviesPopUpData[i].genres,
          "uuid":this.moviesPopUpData[i].uuid,
          "imgaeUrl":this.moviesPopUpData[i].imgaeUrl
          // ... initialize other properties
        };
        this.moviesPopUpUi.push(movie);
      }
     }
     console.log(this.moviesPopUpUi)
     console.log(res);
    })
  }


  close(){
    this.dialogRef.close();
  }
}
