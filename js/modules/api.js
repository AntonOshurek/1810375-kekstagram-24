import {showAlert, dataPostSuccess, dataPostError, showLoadImgMessage, removeLoadImgMessage} from './utils.js';

const getData = (showData, openPost) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      showData(data);
      openPost(data);
    })
    .catch(() => {
      showAlert('сервер отдыхает, попробуйте позже');
    });
};

const sendData = (body, uploadModalClose) => {
  showLoadImgMessage();
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        removeLoadImgMessage();
        dataPostSuccess();
        uploadModalClose();
      } else {
        removeLoadImgMessage();
        dataPostError();
      }
    })
    .catch(() => {
      dataPostError();
    });
};

export {getData, sendData};
