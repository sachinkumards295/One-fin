import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   observer$ = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }



  loginData(username: any,password: any){
    
  const  payload:any = {
    'username': username,
    'password': password
    }
     return     this.http.post('https://demo.credy.in/api/v1/usermodule/login/', payload);
  }

  setMoviesData(data:any){
 this.observer$.next(data);
  }

  getMoviesData(){
    const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Token ${token}`
  };

    return this.http.get('https://demo.credy.in/api/v1/maya/movies/',{ headers });
 
}   

getImageBasedOnMovieName(title:any){
  
 return this.http.get('https://ui-avatars.com/api/?name=' + title) 
}
}
