import { Component, Input } from '@angular/core';
import { Movie } from '../../providers/model/movie.interface';
import { environment } from 'src/app/core/environments/environment.dev';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input('movie') movie!: Movie;
  url: string = environment.imgURL;
  defaultImage : string  = '../../../../../assets/images/spinner-icon-gif.png';
}
