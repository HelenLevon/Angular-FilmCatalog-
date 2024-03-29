import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Film } from '../shared/models/film.model';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  favoritesNumber = 0;
  constructor() {

    this.favoritesNumber = this.countFavorites();
   }

  FilmList: Film[] = [
    { id: 1, name: "Тор: Рагнарёк", year: 2017, imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/2NEzIdBAgm4kSYXF4OH86qs3a0u.jpg", description: "Вернувшись в Асгард в поисках таинственного врага, ведущего охоту на Камни Бесконечности, Тор обнаруживает, что действия его брата Локи, захватившего трон Асгарда, привели к приближению наиболее страшного события — Рагнарёка. ведущего охоту на Камни Бесконечности, Тор обнаруживает, что действия его брата Локи, захватившего трон Асгарда, привели к приближению наиболее страшного события — Рагнарёка." },
    { id: 2, name: "Чудо-женщина ", year: 2017, imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/fMnMonAyK3nzp1P1odIFzYoSvYe.jpg", description: "Перед тем как стать Чудо-Женщиной, она была Дианой — принцессой амазонок, обученной быть непобедимой воительницей. И когда на берегах огражденного ото внешнего мира райского острова, который служил ей родиной, терпит крушение американский пилот и рассказывает о серьезном конфликте, бушующем во внешнем мире, Диана покидает свой дом, чтобы справиться с этой угрозой" },
    { id: 3, name: "Звёздные Войны: Последние джеда", year: 2018, imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/qP4gdqvE4KsFqkeY9EdVRCA8ahj.jpg", description: "Баланс Силы снова нарушен, и события развиваются с невероятной скоростью! Рей, Финну, вездесущему дроиду BB-8 и другим героям предстоит опасная схватка с могущественным Первым Орденом." },
    { id: 4, name: "Бегущий по лезвию 2049", year: 2017, imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/lxFTHZHBHRXcuzR9ygpMGP1kEKr.jpg", description: "В недалеком будущем мир населен людьми и репликантами, созданными выполнять самую тяжелую работу. Работа офицера полиции Кей - держать репликантов под контролем в условиях нарастающего напряжения" },
    { id: 5, name: "Лига справедливости", year: 2017, imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/e2f1GaWLkk5Sj7cZMi38mUPXYdt.jpg", description: "Понимая, что существуют угрозы, с которыми невозможно справиться в одиночку, Бэтмен и Супермен создают совершенно новую команду, собрав в ней самых могущественных защитников человечества. " },
    { id: 6, name: "Чужой. Завет", year: 2017, imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/5ff1DVsSL7CP5zIjr8ayHaaHScP.jpg", description: "Выжившие члены команды «Прометея» Элизабет и андроид Дэвид сделали первый шаг навстречу разгадке тайны инженеров. Теперь пришло время узнать остальную правду, которая укрыта на родной планете белесых великанов — Рай.",favorite: true },
  ];

  films: Film[];

  getFilms() {
    
    this.films = this.FilmList.map((film): Film => 
    {if (!film.favorite) return({ ...film, "favorite": false} as Film)
        else {
          
          return({ ...film} as Film)}
        }
    );
    return this.films;
  }

  countFavorites(){
    this.films = this.FilmList.map((film): Film => 
    {if (film.favorite) {
      
          this.favoritesNumber++;
          return({ ...film} as Film)
    }
        }
    );
    return this.favoritesNumber;

  }
}
