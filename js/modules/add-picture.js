import {onCommentsCheckValidity, onHashTagsCheckValidity} from './check-validity.js';
import {onImgScaleEffect, onImgEffects} from './photo-effects.js';
import {sendData} from './api.js';
import {showPostSuccessModal, showPostErrorModal, showLoadImgMessage, removeLoadImgMessage} from './notification.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const imgUpload = uploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = uploadForm.querySelector('.img-upload__cancel');
const textHashtags = uploadForm.querySelector('.text__hashtags');
const textDescription = uploadForm.querySelector('.text__description');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');
const imgEffectPreview = uploadForm.querySelectorAll('.effects__preview');
//img scale
const scaleControlsBlock = document.querySelector('.img-upload__scale');
const scaleInput = document.querySelector('.scale__control--value');
//img effetcts
const imgEffectsBlock = document.querySelector('.img-upload__effects');
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

const onFormSubmit = (evt) => {
  evt.preventDefault();
  showLoadImgMessage();

  sendData(new FormData(evt.target))
    .then((response) => {
      if (response.ok) {
        showPostSuccessModal();
      }
    }).catch(() => {
      showPostErrorModal();
    }).finally(() => {
      removeLoadImgMessage();
      uploadModalClose();
    });
};

function uploadModalOpen () {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  //close modal listeners
  document.addEventListener('keydown', onUploadEscKeydown);
  imgUploadCancel.addEventListener('click', onCancelClick);
  //description checked function
  textDescription.addEventListener('input', onCommentsCheckValidity);
  // # validity function
  textHashtags.addEventListener('input', onHashTagsCheckValidity);
  //scale effect
  scaleControlsBlock.addEventListener('click', onImgScaleEffect);
  //img effects
  imgEffectsBlock.addEventListener('click', onImgEffects);
  //form upload listener
  uploadForm.addEventListener('submit', onFormSubmit);
}

function uploadModalClose () {
  imgUpload.classList.add('hidden');
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
  imgUploadCancel.removeEventListener('click', onCancelClick);
  textDescription.removeEventListener('input', onCommentsCheckValidity);
  textHashtags.removeEventListener('input', onHashTagsCheckValidity);
  scaleControlsBlock.removeEventListener('click', onImgScaleEffect);
  imgEffectsBlock.removeEventListener('click', onImgEffects);
  uploadForm.removeEventListener('submit', onFormSubmit);
}

export const addPicture = () => {
  uploadFile.addEventListener('change', () => {
    uploadModalOpen();
    const imgUrl = URL.createObjectURL(uploadFile.files[0]);
    imgPreview.src = imgUrl;
    imgEffectPreview.forEach((item) => {
      item.style.backgroundImage = `url(${imgUrl})`;
    });
  });
};
