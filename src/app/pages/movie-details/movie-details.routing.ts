import { Routes } from '@angular/router';
import { MovieDetailsIndexComponent } from './components/movie-details-index/movie-details-index.component';

export const MovieDetailsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'movie/:id',
        component: MovieDetailsIndexComponent,
      },
    ],
  },
];
