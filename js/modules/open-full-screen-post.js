const NOTES_ON_PAGE = 5;

export default function openFullScreenPost(posts) {
  const picturesBlock = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  const closeButton = document.querySelector('.big-picture__cancel');

  const commentLoaderButton = document.querySelector('.social__comments-loader');

  const onPopupEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeBigPicModal();
    }
  };

  const onCloseButtonClick = () => {
    closeBigPicModal();
  };

  function openBigPicModal () {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
    closeButton.addEventListener('click', onCloseButtonClick);
  }

  function closeBigPicModal () {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    closeButton.removeEventListener('click', onCloseButtonClick);
  }

  const showPostData = (postData) => {
    const picture = document.querySelector('.big-picture__img');
    const likes = document.querySelector('.likes-count');
    const caption = document.querySelector('.social__caption');
    const comments = document.querySelector('.social__comments');
    const comment = document.querySelector('.social__comment');
    const commentsShowCount = document.querySelector('.comments-show-count');
    const commentsCount = document.querySelector('.comments-count');

    picture.querySelector('img').src = postData.url;
    likes.textContent = postData.likes;
    caption.textContent = postData.description;

    comments.innerHTML = ''; //clear comments block
    commentsCount.textContent = postData.comments.length; //shows the number of comments

    const showComments = (notes) => {
      const fragment = new DocumentFragment();

      notes.forEach((note) => {
        const commentItem = comment.cloneNode(true);
        commentItem.querySelector('.social__picture').src = note.avatar;
        commentItem.querySelector('.social__picture').alt = note.name;
        commentItem.querySelector('.social__text').textContent = note.message;
        fragment.append(commentItem);
      });
      comments.append(fragment);
      //shows the number of displayed comments
      const commentsItems = document.querySelectorAll('.social__comment');
      commentsShowCount.textContent = commentsItems.length;
      if (+commentsItems.length >= postData.comments.length) {
        commentLoaderButton.classList.add('hidden');
      } else {
        commentLoaderButton.classList.remove('hidden');
      }
    };

    let pageNum = 0;

    const getComments = () => {
      const start = pageNum * NOTES_ON_PAGE;
      const end = start + NOTES_ON_PAGE;
      const notes = postData.comments.slice(start, end);
      showComments(notes);
    };
    getComments();

    commentLoaderButton.addEventListener('click', () => { //how remove this listener???
      pageNum++;
      getComments();
    });
  };

  const getCurrentPost = () => {
    picturesBlock.addEventListener('click', (evt) => {
      const postId = +(evt.target.parentElement.getAttribute('data-id'));
      posts.forEach((post) => {
        if(post.id === postId){
          openBigPicModal();
          showPostData(post);
        }
      });
    });
  };

  getCurrentPost();
}
