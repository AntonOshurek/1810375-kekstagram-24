import {checkCommentValidity, checkHashValidity} from './check-validity.js';
import {scaleEffect} from './photo-effects.js';

export default function addPicture() {
  const body = document.querySelector('body');
  const uploadForm = document.querySelector('.img-upload__form');
  const uploadFile = uploadForm.querySelector('#upload-file');
  const imageUpload = uploadForm.querySelector('.img-upload__overlay');
  const imageUploadCancel = uploadForm.querySelector('.img-upload__cancel');
  const textHashtags = uploadForm.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');
  const imgPreview = uploadForm.querySelector('.img-upload__preview-img');
  const scaleButton = document.querySelector('.img-upload__scale');
  const scaleInput = document.querySelector('.scale__control--value');

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
    //scale effect
    scaleButton.addEventListener('click', scaleEffect);
    scaleInput.value = 100;
    imgPreview.style.transform = 'scale(1.0)';
  }

  function uploadModalClose () {
    imageUpload.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadForm.reset();
    uploadFile.value = '';

    document.removeEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.removeEventListener('click', onCancelClick);
    textDescription.removeEventListener('input', checkCommentValidity);
    textHashtags.removeEventListener('input', checkHashValidity);
    scaleButton.removeEventListener('click', scaleEffect);
  }

  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
    imgPreview.src = URL.createObjectURL(uploadFile.files[0]);
  });
}
