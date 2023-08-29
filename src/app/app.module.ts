import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MoviesComponent } from './movies/movies.component';
import { TruncatePipe } from './truncate.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { MoviesPopupComponent } from './movies-popup/movies-popup.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes  = [
{
  path: '',
  component: LoginComponent
}, {
  path: 'movie',
  component: MoviesComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    MoviesComponent,
    TruncatePipe,
    MoviesPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
