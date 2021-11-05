import {onCommentsCheckValidity, onHashTagsCheckValidity} from './check-validity.js';
import {onImgScaleEffect, onImgEffects} from './photo-effects.js';
import {sendData} from './api.js';

export default function addPicture() {
  const body = document.querySelector('body');
  const uploadForm = document.querySelector('.img-upload__form');
  const uploadFile = uploadForm.querySelector('#upload-file');
  const imageUpload = uploadForm.querySelector('.img-upload__overlay');
  const imageUploadCancel = uploadForm.querySelector('.img-upload__cancel');
  const textHashtags = uploadForm.querySelector('.text__hashtags');
  const textDescription = uploadForm.querySelector('.text__description');
  const imgPreview = uploadForm.querySelector('.img-upload__preview img');
  const imgEffectPreview = uploadForm.querySelectorAll('.effects__preview');
  //img scale
  const scaleControls = document.querySelector('.img-upload__scale');
  const scaleInput = document.querySelector('.scale__control--value');
  //img effetcts
  const imgEffects = document.querySelector('.img-upload__effects');
  const slider = document.querySelector('.effect-level__slider');

  const onUploadEscKeydown = (evt) => {
    if (!evt.target.closest('.img-upload__text') && evt.key === 'Escape' ) {
      evt.preventDefault();
      uploadModalClose();
    }
  };

  const onCancelClick = () => {
    uploadModalClose();
  };

  const setUserFormSubmit = (evt) => {
    evt.preventDefault();
    sendData(
      new FormData(evt.target),
      uploadModalClose,
    );
  };

  function uploadModalOpen () {
    imageUpload.classList.remove('hidden');
    body.classList.add('modal-open');
    //close modal listeners
    document.addEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.addEventListener('click', onCancelClick);
    //description checked function
    textDescription.addEventListener('input', onCommentsCheckValidity);
    // # validity function
    textHashtags.addEventListener('input', onHashTagsCheckValidity);
    //scale effect
    scaleControls.addEventListener('click', onImgScaleEffect);
    //img effects
    imgEffects.addEventListener('click', onImgEffects);
    //form upload listener
    uploadForm.addEventListener('submit', setUserFormSubmit);
  }

  function uploadModalClose () {
    imageUpload.classList.add('hidden');
    body.classList.remove('modal-open');
    //form reset
    uploadForm.reset();
    uploadFile.value = '';
    //photo editing style reset
    imgPreview.style.transform = 'scale(1.0)';
    scaleInput.value = '100%';
    imgPreview.className = '';
    imgPreview.style.filter = '';
    slider.style.display = 'none';
    //listeners reset
    document.removeEventListener('keydown', onUploadEscKeydown);
    imageUploadCancel.removeEventListener('click', onCancelClick);
    textDescription.removeEventListener('input', onCommentsCheckValidity);
    textHashtags.removeEventListener('input', onHashTagsCheckValidity);
    scaleControls.removeEventListener('click', onImgScaleEffect);
    imgEffects.removeEventListener('click', onImgEffects);
    uploadForm.removeEventListener('submit', setUserFormSubmit);
  }

  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
    const imgUrl = URL.createObjectURL(uploadFile.files[0]);
    imgPreview.src = imgUrl;
    imgEffectPreview.forEach((item) => {
      item.style.backgroundImage = `url(${imgUrl})`;
    });
  });
}
