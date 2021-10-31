import {checkCommentValidity, checkHashValidity} from './check-validity.js';
import {scaleEffect, onImgEffects} from './photo-effects.js';

export default function addPicture() {
  const body = document.querySelector('body');
  const uploadForm = document.querySelector('.img-upload__form');
  const uploadFile = uploadForm.querySelector('#upload-file');
  const imageUpload = uploadForm.querySelector('.img-upload__overlay');
  const imageUploadCancel = uploadForm.querySelector('.img-upload__cancel');
  const textHashtags = uploadForm.querySelector('.text__hashtags');
  const textDescription = document.querySelector('.text__description');
  const imgPreview = uploadForm.querySelector('.img-upload__preview img');
  //img scale
  const scaleButton = document.querySelector('.img-upload__scale');
  const scaleInput = document.querySelector('.scale__control--value');
  //img effetcts
  const imgEffects = document.querySelector('.img-upload__effects');

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
    //close modal listeners
    document.addEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.addEventListener('click', onCancelClick);
    //description checked function
    textDescription.addEventListener('input', checkCommentValidity);
    // # validity function
    textHashtags.addEventListener('input', checkHashValidity);
    //scale effect
    scaleButton.addEventListener('click', scaleEffect);
    //img effects
    imgEffects.addEventListener('click', onImgEffects);
    //photo editing style reset
    imgPreview.style.transform = 'scale(1.0)';
    imgPreview.className = '';
    scaleInput.value = 100;
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
    imgEffects.removeEventListener('click', onImgEffects);
  }

  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
    imgPreview.src = URL.createObjectURL(uploadFile.files[0]);
  });
}
