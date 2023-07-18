import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { HomeIntroSectionComponent } from './components/home-intro-section/home-intro-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesSectionComponent } from './components/movies-section/movies-section.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    HomeIndexComponent,
    HomeIntroSectionComponent,
    MoviesSectionComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginatorModule,
    LazyLoadImageModule,
  ],
})
export class HomeModule {}
