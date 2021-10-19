export default function openFullScreenPost(posts) {
  const picturesBlock = document.querySelector('.pictures');
  const pictureElem = document.querySelectorAll('.picture');

  const getCurrentPost = (evt) => {
    if (evt.target.closest('.picture')) {
      //console.log(evt.srcElement.src);
    } else {
      console.log('else');
    }
  };

  picturesBlock.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target && target.classList.contains('.picture__img')) {
      pictureElem.forEach((element, i) => {
        if (evt.target === element) {
          console.log(element);
        }
      });
    }

    getCurrentPost(evt);
  });

  console.log(posts);
}
