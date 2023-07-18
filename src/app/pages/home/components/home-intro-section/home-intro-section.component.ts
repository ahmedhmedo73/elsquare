import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesStoreService } from 'src/app/pages/movie-details/services/movies-store/movies-store.service';

@Component({
  selector: 'app-home-intro-section',
  templateUrl: './home-intro-section.component.html',
  styleUrls: ['./home-intro-section.component.scss'],
})
export class HomeIntroSectionComponent {
  saerchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private moviesStoreService: MoviesStoreService
  ) {}
  ngOnInit(): void {
    this.initSearchForm();
  }
  initSearchForm(): void {
    this.saerchForm = this.formBuilder.group({
      text: [''],
    });
  }
  searchMovie(): void {
    let text = this.saerchForm.value.text.trim();
    if (text.length > 2) {
      this.moviesStoreService.SearchMovie(this.saerchForm.value.text);
    } else {
      this.moviesStoreService.GetMovies(1);
    }
  }
}
