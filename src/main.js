import { createUserRankTemplate } from './view/user-rank';
import {createMenuAndSortTemplate} from './view/menu-sort';
import {createSortedFilmTemplate} from './view/sorted-films';
import {createShowMoreButtonTemplate} from './view/show-more-button';
import {createTopRatedFilmsTemplate} from './view/top-rated-films';
import {createTopCommentedFilmsTemplate} from './view/top-commented-films';
import {createFooterStatsTemplate} from './view/footer-films-stat';
import {createFilmPopupTemplate} from './view/popup';


// console.log('main.js work fine');

const userRankPlace = document.querySelector('.header');
const mainPlace = document.querySelector('.main');
const footerStatsPlace = document.querySelector('.footer__statistics');
const footerPlace = document.querySelector('.footer');

const createMarkup = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

createMarkup(userRankPlace, createUserRankTemplate(),'beforeend');
createMarkup(mainPlace, createMenuAndSortTemplate(),'beforeend');
createMarkup(mainPlace, createSortedFilmTemplate(),'beforeend');

const showMoreButtonPlace = document.querySelector('.films-list');
createMarkup(showMoreButtonPlace,createShowMoreButtonTemplate(),'beforeend');

const topFilmsPlace = document.querySelector('.films');
createMarkup(topFilmsPlace, createTopRatedFilmsTemplate(),'beforeend');
createMarkup(topFilmsPlace, createTopCommentedFilmsTemplate(),'beforeend');

createMarkup(footerStatsPlace, createFooterStatsTemplate(), 'beforeend');

createMarkup(footerPlace, createFilmPopupTemplate(), 'afterend');
// В дз предлагают разбить сайт на карточки фильмов, и потом их добавлять, лучше стоит разбить или можно свои большие блоки оставить? От чего отталкиваться когда решать на какие фрагменты делить?

