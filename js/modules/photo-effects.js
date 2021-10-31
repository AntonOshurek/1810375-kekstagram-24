const SCALE_STEP = 25;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;

const image = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');

const scalePhoto = (scaleValue) => {
  if(scaleValue >= 100) {
    image.style.transform = 'scale(1.0)';
  } else {
    image.style.transform = `scale(0.${scaleValue})`;
  }
};

export const scaleEffect = (evt) => {


  if (evt.target.closest('.scale__control--smaller')) {
    if(scaleInput.value > MIN_SCALE_VALUE) {
      scaleInput.value = +scaleInput.value - SCALE_STEP;
      scalePhoto(+scaleInput.value);
    } else {
      scaleInput.value = MIN_SCALE_VALUE;
    }
  }

  if (evt.target.closest('.scale__control--bigger')) {
    if(scaleInput.value < MAX_SCALE_VALUE) {
      scaleInput.value = +scaleInput.value + SCALE_STEP;
      scalePhoto(+scaleInput.value);
    } else {
      scaleInput.value = MAX_SCALE_VALUE;
    }
  }
};

//PHOTO FILTERS EFFECTS
//const slider = document.querySelector('.effect-level__slider');

export const onImgEffects = (evt) => {

  if(evt.target.closest('.effects__preview--none')) {
    console.log('effects__preview--none');
    image.className = '';
  }

  if(evt.target.closest('.effects__preview--chrome')) {
    console.log('effects__preview--chrome');
    image.className = 'effects__preview--chrome';
  }

  if(evt.target.closest('.effects__preview--sepia')) {
    console.log('effects__preview--sepia');
    image.className = 'effects__preview--sepia';
  }

  if(evt.target.closest('.effects__preview--marvin')) {
    console.log('effects__preview--marvin');
    image.className = 'effects__preview--marvin';
  }

  if(evt.target.closest('.effects__preview--phobos')) {
    console.log('effects__preview--phobos');
    image.className = 'effects__preview--phobos';
  }

  if(evt.target.closest('.effects__preview--heat')) {
    console.log('effects__preview--heat');
    image.className = 'effects__preview--heat';
  }
};
