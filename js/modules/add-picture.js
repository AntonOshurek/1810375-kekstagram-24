import {testStringLength} from './test-string.js';

export default function addPicture() {
  const body = document.querySelector('body');
  const uploadFile = document.querySelector('#upload-file');
  const imageUpload = document.querySelector('.img-upload__overlay');
  const imageUploadCancel = document.querySelector('.img-upload__cancel');
  const textHashtags = document.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');
  const uploadSubmit = document.querySelector('.img-upload__submit');

  const checkCommentValidity = () => {
    const MAX_COMMENT_LENGTH = 140;
    if (!testStringLength(MAX_COMMENT_LENGTH, textDescription.value)) {
      textDescription.setCustomValidity('до 140 символов');
    } else {
      textDescription.setCustomValidity('');
    }
    textDescription.reportValidity();
  };

  const checkHashValidity = () => {
    const reg = /(#[a-z0-9][a-z0-9\-_]*)/ig;

    if (!reg.test(textHashtags.value)) {
      textHashtags.setCustomValidity('некорректный тег');
    } else {
      textHashtags.setCustomValidity('');
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
