import showPictures from './modules/show-pictures.js';
import openFullScreenPost from './modules/open-full-screen-post.js';
import addPicture from './modules/add-picture.js';
import {getData} from './modules/api.js';
import {showAlert} from './modules/utils.js';

getData().then((data) => {
  if(data) {
    showPictures(data);
    openFullScreenPost(data);
  }
}).catch((err) => {
  showAlert(`ошибка сервера - ${err}`);
});

addPicture();

