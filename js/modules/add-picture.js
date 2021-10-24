import {testStringLength} from './test-string.js';

export default function addPicture() {
  const body = document.querySelector('body');
  const uploadFile = document.querySelector('#upload-file');
  const imageUpload = document.querySelector('.img-upload__overlay');
  const imageUploadCancel = document.querySelector('.img-upload__cancel');
  const textHashtags = document.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');
  const MAX_COMMENT_LENGTH = 140;
  const commentReg = /^#[A-Za-zА-Яа-яЁё0-9]*$|(^$)/i;

  const hasDuplicates = (array) => (new Set(array)).size !== array.length;

  const checkCommentValidity = () => {
    if (!testStringLength(MAX_COMMENT_LENGTH, textDescription.value)) {
      textDescription.setCustomValidity('до 140 символов');
    } else {
      textDescription.setCustomValidity('');
    }
    textDescription.reportValidity();
  };

  const checkHashValidity = () => {

    textHashtags.value = textHashtags.value.toLowerCase().replace(/\s+/g, ' ');
    const hashArray = textHashtags.value.split(' ');
    console.log(hashArray);

    let error = '';

    hashArray.forEach((hash) => {
      if(!hash.startsWith('#')) {
        error = 'хештег должен начинаться с решётки #';
      }

      if(hash === '#') {
        error = 'хеш-тег не может состоять только из одной решётки';
      }

      /*if(!commentReg.test(hash)) {
        error = 'хештег не может содержать пробелы, спецсимволы (@, $ и т. п.)';
      }*/

      if(hash.length > 5) {
        error = 'не больше 20 символов';
      }

      if(hasDuplicates(hashArray)) {
        error = 'хеш-теги не могут повторяться';
      }

      if (hashArray.length > 5) {
        error = 'не больше 5 тегов';
      }
    });

    if (error === '' || error === 0) {
      textHashtags.setCustomValidity('');
    } else {
      textHashtags.setCustomValidity(error);
    }

    textHashtags.reportValidity();
  };

  const onUploadEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      uploadModalClose();
    }
  };

  const onCancelClick = () => {
    uploadModalClose();
  };

  function uploadModalOpen () {
    imageUpload.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.addEventListener('click', onCancelClick);

    textDescription.addEventListener('input', checkCommentValidity);
    textHashtags.addEventListener('input', checkHashValidity);
  }

  function uploadModalClose () {
    imageUpload.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onCancelClick);
    imageUploadCancel.removeEventListener('click', onCancelClick);

    textDescription.removeEventListener('input', checkCommentValidity);
    textHashtags.removeEventListener('input', checkHashValidity);
    uploadFile.value = '';
  }

  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
  });

}
