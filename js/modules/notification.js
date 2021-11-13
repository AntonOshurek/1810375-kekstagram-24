const ALERT_SHOW_TIME = 5000;

const seccessPopup = document.querySelector('#success');
const errorPopup = document.querySelector('#error');
const imgUploadMessage = document.querySelector('#messages');
const body = document.querySelector('body');

//alert modal
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//img load message
const showLoadImgMessage = () => {
  const templateItem = imgUploadMessage.content.cloneNode(true);
  body.append(templateItem);
};

const removeLoadImgMessage = () => {
  document.querySelector('.img-upload__message--loading').remove();
};

//seccess modal
const showPostSuccessModal = () => {
  const templateItem = seccessPopup.content.cloneNode(true);
  body.append(templateItem);
  const successModal = document.querySelector('.success');

  const onSuccessModalClose = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successModal.remove();
    }

    if(!evt.target.closest('.success__inner') || evt.target.getAttribute('type') === 'button') {
      successModal.remove();
    }

    document.removeEventListener('keydown', onSuccessModalClose);
  };

  successModal.addEventListener('click', onSuccessModalClose);
  document.addEventListener('keydown', onSuccessModalClose);
};

//error modal
const showPostErrorModal = () => {
  const templateItem = errorPopup.content.cloneNode(true);
  body.append(templateItem);
  const errorModal = document.querySelector('.error');

  const onErrorModalClose = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      errorModal.remove();
    }

    if(!evt.target.closest('.error__inner') || evt.target.getAttribute('type') === 'button') {
      errorModal.remove();
    }

    document.removeEventListener('keydown', onErrorModalClose);
  };

  errorModal.addEventListener('click', onErrorModalClose);
  document.addEventListener('keydown', onErrorModalClose);
};

export {showAlert, showPostSuccessModal, showPostErrorModal, showLoadImgMessage, removeLoadImgMessage};
