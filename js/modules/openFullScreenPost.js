export default function openFullScreenPost(posts) {
  const picturesBlock = document.querySelector('.pictures');
  //const pictureElem = document.querySelectorAll('.picture');
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.big-picture__cancel');

  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  console.log(posts);

  const closeBigPicModal = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    //hide temporarily
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
  };

  const openBigPicModal = () => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    //hide temporarily
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    closeBtn.addEventListener('click', () => {
      closeBigPicModal();
    });

    bigPicture.addEventListener('click', (evt) => {
      if (!evt.target.closest('.big-picture__preview')) {
        closeBigPicModal();
      }
    });

    window.onkeydown = (event) => {
      if ( event.keyCode === 27 ) {closeBigPicModal();}
    };
  };

  const getCurrentPost = () => {
    picturesBlock.addEventListener('click', (evt) => {
      const postId = +(evt.target.parentElement.getAttribute('data-id'));
      posts.forEach((elem) => {
        if(elem.id === postId){
          openBigPicModal();
        }
      });
    });
  };

  getCurrentPost();
}
