import { createUserRankTemplate } from './view/user-rank';
import {createMenuTemplate} from './view/menu';
import {createSortingTemplate} from './view/sorting';
import { createFilmsContainerTemplate } from './view/films-conatiner';
import {Films} from './view/films';
import {createShowMoreButtonTemplate} from './view/show-more-button';
import {createFilmPopupTemplate} from './view/film-popup';
import {createFooterStatsTemplate} from './view/footer-stats';


const headerPlace = document.querySelector('.header');
const mainPlace = document.querySelector('.main');
const footerPlace = document.querySelector('.footer');


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(headerPlace, createUserRankTemplate(),'beforeend');
render(mainPlace, createMenuTemplate(),'beforeend');
render(mainPlace, createSortingTemplate(), 'beforeend');
render(mainPlace, createFilmsContainerTemplate(),'beforeend');

const filmsPlaces = document.querySelectorAll('.films-list__container');

render(filmsPlaces[0],Films.THE_DANCE_OF_LIFE,'beforeend');
render(filmsPlaces[0],Films.SAGEBRUSH_TRAIL,'beforeend');
render(filmsPlaces[0],Films.THE_MAN_WITH_THE_GOLDEN_ARM,'beforeend');
render(filmsPlaces[0],Films.SANTA_CLAUS_CONQUERS_THE_MARTIANS,'beforeend');
render(filmsPlaces[0],Films.POPEYE_THE_SAILOR_MEETS_SINBAD_THE_SAILOR,'beforeend');

const filmListPlace = document.querySelector('.films-list');

render(filmListPlace, createShowMoreButtonTemplate(), 'beforeend');


render(filmsPlaces[1],Films.THE_MAN_WITH_THE_GOLDEN_ARM, 'beforeend');
render(filmsPlaces[1],Films.THE_GREAT_FLAMARION, 'beforeend');

render(filmsPlaces[2],Films.SANTA_CLAUS_CONQUERS_THE_MARTIANS, 'beforeend');
render(filmsPlaces[2],Films.MADE_FOR_EACH_OTHER, 'beforeend');

render(footerPlace, createFooterStatsTemplate(), 'beforeend');
render(footerPlace, createFilmPopupTemplate(),'afterend');

