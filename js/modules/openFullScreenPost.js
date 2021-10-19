export default function openFullScreenPost(posts) {
  const picturesBlock = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.big-picture__cancel');

  //consts for hide temporarily
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

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

  const showPostData = (postData) => {
    const picture = document.querySelector('.big-picture__img');
    const likes = document.querySelector('.likes-count');
    const caption = document.querySelector('.social__caption');
    const comments = document.querySelector('.social__comments');
    const comment = document.querySelector('.social__comment');

    picture.querySelector('img').src = `${postData.url}`;
    likes.textContent = `${postData.likes}`;
    caption.textContent = `${postData.description}`;

    comments.innerHTML = ''; //clear comments block
    const fragment = new DocumentFragment();

    postData.comments.forEach((item) => {
      const commentItem = comment.cloneNode(true);
      commentItem.querySelector('.social__picture').src = item.avatar;
      commentItem.querySelector('.social__picture').alt = item.name;
      commentItem.querySelector('.social__text').textContent = item.message;
      fragment.append(commentItem);
    });

    comments.append(fragment);
  };

  const getCurrentPost = () => {
    picturesBlock.addEventListener('click', (evt) => {
      const postId = +(evt.target.parentElement.getAttribute('data-id'));
      posts.forEach((elem) => {
        if(elem.id === postId){
          const postData = elem;
          openBigPicModal();
          showPostData(postData);
        }
      });
    });
  };

  getCurrentPost();
}
