import showPictures from './show-pictures.js';
import {getRandomInt} from './random.js';
import {debounce} from '../utils/debounce.js';

export default function filterPictures(data) {
  const imgFiltersBlock = document.querySelector('.img-filters');
  const imgFiltersForm = document.querySelector('.img-filters__form');
  const imgFiltersButtons = document.querySelectorAll('.img-filters__button');
  imgFiltersBlock.classList.remove('img-filters--inactive');

  const hasDuplicates = (array) => (new Set(array)).size !== array.length;

  const postsSort = (sortName) => {
    if(sortName === 'filter-default') {
      showPictures(data);
    }

    if(sortName === 'filter-discussed') {
      const filterDiscussed = JSON.parse(JSON.stringify(data)).sort((item1, item2) => item2.comments.length - item1.comments.length);
      showPictures(filterDiscussed);
    }

    if(sortName === 'filter-random') {
      const randomData = [];
      for(let i = 0; i<10; i++) {
        randomData.push(data[getRandomInt(0, data.length - 1)]);
        if(hasDuplicates(randomData)) {
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
      postsSort(evt.target.id);
    }
  };

  imgFiltersForm.addEventListener('click', debounce(onFiltersClick));
}