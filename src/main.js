import { createUserRankTemplate } from './view/user-rank';
import {createMenuTemplate} from './view/menu';
import {createSortingTemplate} from './view/sorting';
import {createFilmsContainerTemplate} from './view/films-conatiner';
import {createFilmTemplate} from './view/film';
import {createShowMoreButtonTemplate} from './view/show-more-button';
import {createFilmPopupTemplate} from './view/film-popup';
import {createFooterStatsTemplate} from './view/footer-stats';


const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(header, createUserRankTemplate(),'beforeend');
render(main, createMenuTemplate(),'beforeend');
render(main, createSortingTemplate(), 'beforeend');
render(main, createFilmsContainerTemplate(),'beforeend');

const filmsPlaces = document.querySelectorAll('.films-list__container');

render(filmsPlaces[0],createFilmTemplate(),'beforeend');
render(filmsPlaces[0],createFilmTemplate(),'beforeend');
render(filmsPlaces[0],createFilmTemplate(),'beforeend');
render(filmsPlaces[0],createFilmTemplate(),'beforeend');
render(filmsPlaces[0],createFilmTemplate(),'beforeend');

const filmListPlace = document.querySelector('.films-list');

render(filmListPlace, createShowMoreButtonTemplate(), 'beforeend');


render(filmsPlaces[1],createFilmTemplate(), 'beforeend');
render(filmsPlaces[1],createFilmTemplate(), 'beforeend');

render(filmsPlaces[2],createFilmTemplate(), 'beforeend');
render(filmsPlaces[2],createFilmTemplate(), 'beforeend');

render(footer, createFooterStatsTemplate(), 'beforeend');
render(footer, createFilmPopupTemplate(),'afterend');

