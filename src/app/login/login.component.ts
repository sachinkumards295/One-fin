import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm !: FormGroup;
  disablenBtn!: boolean;
  loginres:any;
  loggingIn = false;
  errorInvalid = true;
  constructor( private fb: FormBuilder, private movieService: MoviesService, private router:Router) { 
    this.myForm = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    })
  }



  ngOnInit(): void {
 
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }


  onSubmit(form: FormGroup){
    this.loggingIn = true;

    this.movieService.loginData(this.myForm.controls['username'].value,this.myForm.controls['password'].value).subscribe((res) => {
  this.loginres = res;
  this.loggingIn = false;
  this.router.navigate(['/movie']);
  localStorage.setItem('token',this.loginres.data.token);
    } ,error => {
   this.loggingIn = false;
   this.myForm.controls['username'].setErrors({'incorrect': true});
   this.myForm.controls['password'].setErrors({'incorrect': true});
   this.errorInvalid = false; 
    } )

  }

}
