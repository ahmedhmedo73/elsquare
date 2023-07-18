import { Routes } from '@angular/router';
import { HomeIndexComponent } from './components/home-index/home-index.component';

export const homeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeIndexComponent,
      },
    ],
  },
];
