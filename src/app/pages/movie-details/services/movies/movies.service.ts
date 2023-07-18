import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/app/core/environments/environment.dev';
import {
  Movie,
  MovieDetails,
  MoviesResponse,
} from 'src/app/pages/home/providers/model/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  GetMovies(page: number) {
    return this.httpClient.get<MoviesResponse>(
      environment.endpoint + '/movie/popular?page=' + page
    );
  }
  GetMovieDetails(id: number) {
    return this.httpClient.get<MovieDetails>(
      environment.endpoint + '/movie/' + id
    );
  }
  SearchMovie(text: string) {
    return this.httpClient.get<MoviesResponse>(
      environment.endpoint + '/search/movie?query=/' + text
    );
  }
}
