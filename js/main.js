import showPictures from './modules/show-pictures.js';
import openFullScreenPost from './modules/open-full-screen-post.js';
import addPicture from './modules/add-picture.js';
import {getData} from './modules/api.js';

getData(showPictures, openFullScreenPost);
addPicture();

