const SCALE_STEP = 25;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;

const image = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');
const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

//PHOTO SCALE EFFECT
const scalePhoto = (scaleValue) => {
  const scale = +scaleValue.replace(/\D+/, '');
  if(scale >= 100) {
    image.style.transform = 'scale(1.0)';
  } else {
    image.style.transform = `scale(0.${scale})`;
  }
};

export const scaleEffect = (evt) => {
  if (evt.target.closest('.scale__control--smaller')) {
    const value = +scaleInput.value.replace(/\D+/, '');
    if(value > MIN_SCALE_VALUE) {
      scaleInput.value = `${value - SCALE_STEP}%`;
      scalePhoto(scaleInput.value);
    } else {
      scaleInput.value = `${MIN_SCALE_VALUE}%`;
    }
  }

  if (evt.target.closest('.scale__control--bigger')) {
    const value = +scaleInput.value.replace(/\D+/, '');
    if(value < MAX_SCALE_VALUE) {
      scaleInput.value = `${value + SCALE_STEP}%`;
      scalePhoto(scaleInput.value);
    } else {
      scaleInput.value = `${MAX_SCALE_VALUE}%`;
    }
  }
};

//PHOTO FILTERS EFFECTS
noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});
slider.style.display = 'none';


const checkSlider = (effect, symbol = '') => {
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    image.style.filter = `${effect}(${values[handle]}${symbol})`;
  });
};

export const onImgEffects = (evt) => {

  if(evt.target.closest('.effects__preview--none')) {
    image.className = '';
    image.style.filter = '';
    slider.style.display = 'none';
  }

  if(evt.target.closest('.effects__preview--chrome')) {
    image.className = 'effects__preview--chrome';
    slider.style.display = 'block';

    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    checkSlider('grayscale');
  }

  if(evt.target.closest('.effects__preview--sepia')) {
    image.className = 'effects__preview--sepia';
    slider.style.display = 'block';

    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    checkSlider('sepia');
  }

  if(evt.target.closest('.effects__preview--marvin')) {
    image.className = 'effects__preview--marvin';
    slider.style.display = 'block';

    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    checkSlider('invert', '%');
  }

  if(evt.target.closest('.effects__preview--phobos')) {
    image.className = 'effects__preview--phobos';
    slider.style.display = 'block';

    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    checkSlider('blur', 'px');
  }

  if(evt.target.closest('.effects__preview--heat')) {
    image.className = 'effects__preview--heat';
    slider.style.display = 'block';

    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    checkSlider('brightness');
  }
};
