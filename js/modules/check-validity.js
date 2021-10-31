import {testStringLength} from './test-string.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASH_LENGTH = 20;
const MAX_HASH_ARRAY_LENGTH = 5;

const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

const commentReg = /[~`!@_()$%^&*+=\-[\]\\';,/{}|\\":<>?]/g;
const hasDuplicates = (array) => (new Set(array)).size !== array.length;

export const checkCommentValidity = () => {
  if (!testStringLength(MAX_COMMENT_LENGTH, textDescription.value)) {
    textDescription.setCustomValidity('до 140 символов');
  } else {
    textDescription.setCustomValidity('');
  }
  textDescription.reportValidity();
};

export const checkHashValidity = () => {
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
