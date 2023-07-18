import { Injectable } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { BehaviorSubject } from 'rxjs';
import {
  Movie,
  MoviesResponse,
} from 'src/app/pages/home/providers/model/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesStoreService {
  moviesResponse = new BehaviorSubject<MoviesResponse>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  constructor(private MoviesService: MoviesService) {}

  GetMovies(page: number): void {
    this.MoviesService.GetMovies(page).subscribe({
      next: (response) => {
        this.moviesResponse.next(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  SearchMovie(text: string): void {
    this.MoviesService.SearchMovie(text).subscribe({
      next: (response) => {
        this.moviesResponse.next(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
