import {testStringLength} from './test-string.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASH_LENGTH = 20;
const MAX_HASH_ARRAY_LENGTH = 5;

export default function addPicture() {
  const body = document.querySelector('body');
  const uploadForm = document.querySelector('.img-upload__form');
  const uploadFile = uploadForm.querySelector('#upload-file');
  const imageUpload = uploadForm.querySelector('.img-upload__overlay');
  const imageUploadCancel = uploadForm.querySelector('.img-upload__cancel');
  const textHashtags = uploadForm.querySelector('.text__hashtags');
  const textDescription = uploadForm.querySelector('.text__description');
  const imgPreview = uploadForm.querySelector('.img-upload__preview-img');
  const commentReg = /[~`!@_()$%^&*+=\-[\]\\';,/{}|\\":<>?]/g;

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
    textHashtags.value = textHashtags.value.replace(/\s+/g, ' ');
    const hashArray = textHashtags.value.toLowerCase().split(' ');
    let error = '';

    hashArray.forEach((hash) => {
      if(!hash.startsWith('#')) {
        error = 'хеш-тег должен начинаться с решётки #';
      }

      if(hash === '#') {
        error = 'хеш-тег не может состоять только из одной решётки';
      }

      if(commentReg.test(hash)) {
        error = 'хештег не может содержать пробелы, спецсимволы (@, $ и т. п.)';
      }

      if(hash.length > MAX_HASH_LENGTH) {
        error = 'не больше 20 символов';
      }

      if(hasDuplicates(hashArray)) {
        error = 'хеш-теги не могут повторяться';
      }

      if (hashArray.length > MAX_HASH_ARRAY_LENGTH) {
        error = 'не больше 5 тегов';
      }
    });

    if (!error) {
      textHashtags.setCustomValidity('');
    } else if (hashArray[0] === '') {
      textHashtags.value = textHashtags.value.trim();
    } else {
      textHashtags.setCustomValidity(error);
    }

    textHashtags.reportValidity();
  };

  const onUploadEscKeydown = (evt) => {
    if (!evt.target.closest('.img-upload__text') && evt.key === 'Escape' ) {
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
    uploadForm.reset();

    document.removeEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.removeEventListener('click', onCancelClick);

    textDescription.removeEventListener('input', checkCommentValidity);
    textHashtags.removeEventListener('input', checkHashValidity);
    uploadFile.value = '';
  }

  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
    imgPreview.src = URL.createObjectURL(uploadFile.files[0]);
  });

}
