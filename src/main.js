import { createUserRankTemplate } from './view/user-rank';
import {createMenuTemplate} from './view/menu';
import {createSortingTemplate} from './view/sorting';
import { createFilmsContainerTemplate } from './view/films-conatiner';
import {Films} from './view/film-list';
import {createShowMoreButtonTemplate} from './view/show-more-button';
import {createFilmPopupTemplate} from './view/popup';
import {createFooterStatsTemplate} from './view/footer-films-stat';


const userRankPlace = document.querySelector('.header');
const mainPlace = document.querySelector('.main');
const footerPlace = document.querySelector('.footer');


const createMarkup = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

createMarkup(userRankPlace, createUserRankTemplate(),'beforeend');
createMarkup(mainPlace, createMenuTemplate(),'beforeend');
createMarkup(mainPlace, createSortingTemplate(), 'beforeend');
createMarkup(mainPlace, createFilmsContainerTemplate(),'beforeend');

const filmsPlaces = document.querySelectorAll('.films-list__container');

createMarkup(filmsPlaces[0],Films.THEDANCEOFLIFE,'beforeend');
createMarkup(filmsPlaces[0],Films.SAGEBRUSHTRAIL,'beforeend');
createMarkup(filmsPlaces[0],Films.THEMANWITHTHEGOLDENARM,'beforeend');
createMarkup(filmsPlaces[0],Films.SANTACLAUSCONQUERSTHEMARTIANS,'beforeend');
createMarkup(filmsPlaces[0],Films.POPEYETHESAILORMEETSSINBADTHESAILOR,'beforeend');

const filmListPlace = document.querySelector('.films-list');

createMarkup(filmListPlace, createShowMoreButtonTemplate(), 'beforeend');


createMarkup(filmsPlaces[1],Films.THEMANWITHTHEGOLDENARM, 'beforeend');
createMarkup(filmsPlaces[1],Films.THEGREATFLAMARION, 'beforeend');

createMarkup(filmsPlaces[2],Films.SANTACLAUSCONQUERSTHEMARTIANS, 'beforeend');
createMarkup(filmsPlaces[2],Films.MADEFOREACHOTHER, 'beforeend');

createMarkup(footerPlace, createFooterStatsTemplate(), 'beforeend');
createMarkup(footerPlace, createFilmPopupTemplate(),'afterend');

