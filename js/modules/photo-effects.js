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
const imgEffects = document.querySelector('.img-upload__effects');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
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

slider.noUiSlider.destroy();

const onImgEffects = (evt) => {
  image.className = '';

  if(evt.target.closest('.effects__preview--none')) {
    slider.noUiSlider.destroy();
  }

  if(evt.target.closest('.effects__preview--chrome')) {
    image.classList.add('.effects__preview--chrome');

    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 0,
      step: 0.1,
      connect: 'lower',
    });
  }
};

imgEffects.addEventListener('click', onImgEffects);


