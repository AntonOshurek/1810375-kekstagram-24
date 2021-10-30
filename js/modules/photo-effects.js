export default function photoEfffects() {
  const image = document.querySelector('.img-upload__preview-img');
  const slider = document.querySelector('.effect-level__slider');

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

}
