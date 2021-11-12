import showPictures from './show-pictures.js';
import {getRandomInt, checkDuplicates, debounce} from './utils.js';

const RANDOM_DATA_LENGTH = 10;

export default function filterPictures(data) {
  const imgFiltersBlock = document.querySelector('.img-filters');
  const imgFiltersForm = document.querySelector('.img-filters__form');
  const imgFiltersButtons = document.querySelectorAll('.img-filters__button');
  imgFiltersBlock.classList.remove('img-filters--inactive');

  const sortPosts = (sortName) => {
    if(sortName === 'filter-default') {
      showPictures(data);
    }

    if(sortName === 'filter-discussed') {
      const filterDiscussed = JSON.parse(JSON.stringify(data)).sort((item1, item2) => item2.comments.length - item1.comments.length);
      showPictures(filterDiscussed);
    }

    if(sortName === 'filter-random') {
      const randomData = [];
      for(let i = 0; i < RANDOM_DATA_LENGTH; i++) {
        randomData.push(data[getRandomInt(0, data.length - 1)]);
        if(checkDuplicates(randomData)) {
          randomData.pop();
          i--;
        }
      }
      showPictures(randomData);
    }
  };

  const onFiltersClick = (evt) => {
    imgFiltersButtons.forEach((btn) => {
      btn.classList.remove('img-filters__button--active');
    });

    if(evt.target.closest('.img-filters__button')) {
      evt.target.classList.add('img-filters__button--active');
      const sortName = evt.target.id;
      sortPosts(sortName);
    }
  };

  imgFiltersForm.addEventListener('click', debounce(onFiltersClick));
}
