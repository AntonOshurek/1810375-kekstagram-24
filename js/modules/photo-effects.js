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
const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

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

const checkSlider = (effect, symbol = '') => {
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    console.log(effectLevelValue.value);

    image.style.filter = `${effect}(${values[handle]}${symbol})`;
  });
};

export const onImgEffects = (evt) => {

  if(evt.target.closest('.effects__preview--none')) {
    image.className = '';
    image.style.filter = '';
  }

  if(evt.target.closest('.effects__preview--chrome')) {
    image.className = 'effects__preview--chrome';

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
