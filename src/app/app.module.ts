import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovieDBInterceptor } from './core/interceptors/moviedb.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
@NgModule({
  declarations: [AppComponent,NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MovieDBInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
