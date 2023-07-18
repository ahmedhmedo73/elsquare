import { Component } from '@angular/core';
import { Movie } from '../../providers/model/movie.interface';
import { MoviesService } from 'src/app/pages/movie-details/services/movies/movies.service';
import { MoviesStoreService } from 'src/app/pages/movie-details/services/movies-store/movies-store.service';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss'],
})
export class MoviesSectionComponent {
  movies: Movie[] = [];
  totalMovies: number = 0;
  constructor(private moviesStoreService: MoviesStoreService) {}

  ngOnInit(): void {
    this.moviesStoreService.GetMovies(1);
    this.getMovies();
  }
  getMovies(): void {
    this.moviesStoreService.moviesResponse.subscribe({
      next: (response) => {
        this.movies = response.results;
        this.totalMovies = response.total_results;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  onPageChange(event: any) {
    this.moviesStoreService.GetMovies(event.page + 1);
  }
}
