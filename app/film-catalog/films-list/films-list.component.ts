import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService} from '../film.service';
import { Film } from '../../shared/models/film.model';
export interface SortingOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {
  favoritesCount = 0;
  films: Array<Film>;
  sortingOptions: SortingOption[] = [
    {
      value: 'ASC',
      viewValue: 'По алфавиту: A-Z'
    },
    {
      value: 'DESC',
      viewValue: 'По алфавиту: Z-A'
    },
    {
      value: 'Year',
      viewValue: 'По дате: новые с начала'
    }
  ];

  constructor(public filmsService: FilmService) {
  }

  ngOnInit() {
    this.films = this.filmsService.getFilms();
    this.favoritesCount = this.filmsService.favoritesNumber;
  }

  
  sortFilms(evt) {
   
    const { value } = evt;
    switch (value) {
      case 'ASC':
        this.films.sort((a: Film, b: Film): number => {
          if (a.name < b.name) { return -1; }
          if (a.name === b.name) { return 0; }
          return 1;
        });
        break;
      case 'DESC':
        this.films.sort((a: Film, b: Film): number => {
          if (a.name > b.name) { return -1; }
          if (a.name === b.name) { return 0; }
          return 1;
        });
        break;
      case 'Year':
        this.films.sort((a: Film, b: Film): number => {
          if (a.year > b.year) { return -1; }
          if (a.year === b.year) { return 0; }
          return 1;
        });
        break;
    }
  }

  updateFavorites(evt) {
    const {filmId, favorite} = evt;
    favorite ? this.favoritesCount++ : this.favoritesCount--;
  }


}
