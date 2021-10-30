const STEP = 25;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;

export default function photoScale() {
  const image = document.querySelector('.img-upload__preview-img');
  const scaleUpBtn = document.querySelector('.scale__control--bigger');
  const scaleDownBtn = document.querySelector('.scale__control--smaller');
  const scaleInput = document.querySelector('.scale__control--value');
  scaleInput.value = 100;

  const scalePhoto = (scaleValue) => {
    if(scaleValue >= 100) {
      image.style.transform = 'scale(1.0)';
    } else {
      image.style.transform = `scale(0.${scaleValue})`;
    }
  };

  const upScale = () => {
    if(scaleInput.value < MAX_SCALE_VALUE) {
      scaleInput.value = +scaleInput.value + STEP;
      scalePhoto(+scaleInput.value);
    } else {
      scaleInput.value = MAX_SCALE_VALUE;
    }
  };

  const downScale = () => {
    if(scaleInput.value > MIN_SCALE_VALUE) {
      scaleInput.value = +scaleInput.value - STEP;
      scalePhoto(+scaleInput.value);
    } else {
      scaleInput.value = MIN_SCALE_VALUE;
    }
  };

  scaleUpBtn.addEventListener('click', upScale);
  scaleDownBtn.addEventListener('click', downScale);

}
