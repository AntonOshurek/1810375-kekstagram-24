import {testStringLength, checkDuplicates} from './utils.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASH_LENGTH = 20;
const MAX_HASH_ARRAY_LENGTH = 5;
const HASH_TAG_REGEXP = /[~`!@_()$%^&*+=\-[\]\\';,./{}|\\":<>?]/g;

const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

export const onCommentsCheckValidity = () => {
  if (!testStringLength(MAX_COMMENT_LENGTH, textDescription.value)) {
    textDescription.setCustomValidity('до 140 символов');
    textDescription.classList.add('text__description--error');
  } else {
    textDescription.setCustomValidity('');
    textDescription.classList.remove('text__description--error');
  }
  textDescription.reportValidity();
};

export const onHashTagsCheckValidity = () => {
  textHashtags.value = textHashtags.value.replace(/\s+/g, ' ');
  const hashes = textHashtags.value.toLowerCase().split(' ');
  let error = '';

  hashes.forEach((hash) => {
    if(!hash.startsWith('#')) {
      error = 'хеш-тег должен начинаться с решётки #';
    }

    if(hash === '#') {
      error = 'хеш-тег не может состоять только из одной решётки';
    }

    if(HASH_TAG_REGEXP.test(hash)) {
      error = 'хештег не может содержать пробелы, спецсимволы (@, $ и т. п.)';
    }

    if(hash.length > MAX_HASH_LENGTH) {
      error = 'не больше 20 символов';
    }

    if(checkDuplicates(hashes)) {
      error = 'хеш-теги не могут повторяться';
    }

    if (hashes.length > MAX_HASH_ARRAY_LENGTH) {
      error = 'не больше 5 тегов';
    }
  });

  if (!error) {
    textHashtags.setCustomValidity('');
    textHashtags.classList.remove('text__hashtags--error');
  } else if (hashes[0] === '') {
    textHashtags.setCustomValidity('');
    textHashtags.classList.remove('text__hashtags--error');
    textHashtags.value = textHashtags.value.trim();
  } else {
    textHashtags.setCustomValidity(error);
    textHashtags.classList.add('text__hashtags--error');
  }

  textHashtags.reportValidity();
};
