import { Component } from '@angular/core';
import { NavBarLink } from '../../pages/home/providers/model/navbar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  links: NavBarLink[] = [
    {
      title: 'Home',
      route: '',
    },
    {
      title: 'About',
      route: '',
    },
    {
      title: 'Portfolio',
      route: '',
    },
    {
      title: 'Team',
      route: '',
    },
    {
      title: 'Contact',
      route: '',
    },
  ];
}
