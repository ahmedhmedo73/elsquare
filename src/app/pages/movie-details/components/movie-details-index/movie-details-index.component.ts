import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from '../../services/movies/movies.service';
import { MovieDetails } from 'src/app/pages/home/providers/model/movie.interface';
import { environment } from 'src/app/core/environments/environment.dev';

@Component({
  selector: 'app-movie-details-index',
  templateUrl: './movie-details-index.component.html',
  styleUrls: ['./movie-details-index.component.scss'],
})
export class MovieDetailsIndexComponent {
  movieId: number = 0;
  subscription: Subscription[] = [];
  movieDetails!: MovieDetails;
  url: string = environment.imgURL;
  @HostBinding("style.--movie-backdrop-url") movieBackdropUrl = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.handleRouterParams();
  }
  handleRouterParams() {
    this.subscription.push(
      this.activatedRoute.params.subscribe({
        next: (response: any) => {
          this.movieId = response.id;
          this.getMovieDetails();
        },
      })
    );
  }
  getMovieDetails() {
    this.subscription.push(
      this.moviesService.GetMovieDetails(this.movieId).subscribe({
        next: (response) => {
          this.movieDetails = response;
          this.movieBackdropUrl = 'url(' +this.url + response.backdrop_path + ')'
        },
        error: (error) => {},
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
