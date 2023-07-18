import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsIndexComponent } from './components/movie-details-index/movie-details-index.component';
import { RouterModule } from '@angular/router';
import { MovieDetailsRoutes } from './movie-details.routing';



@NgModule({
  declarations: [
    MovieDetailsIndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MovieDetailsRoutes),
  ]
})
export class MovieDetailsModule { }
