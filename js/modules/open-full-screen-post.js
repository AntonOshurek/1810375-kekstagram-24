const NOTES_ON_PAGE = 5;

export default function openFullScreenPost(posts) {
  const picturesBlock = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  const closeButton = document.querySelector('.big-picture__cancel');
  const picture = document.querySelector('.big-picture__img');
  const likes = document.querySelector('.likes-count');
  const caption = document.querySelector('.social__caption');
  //vars for comments
  const commentsCount = document.querySelector('.comments-count');
  const comment = document.querySelector('.social__comment');
  const commentsShowCount = document.querySelector('.comments-show-count');
  const comments = document.querySelector('.social__comments');
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

  const showComments = (commentsList, postData) => {
    const fragment = new DocumentFragment();

    commentsList.forEach((currentComment) => {
      const commentItem = comment.cloneNode(true);
      commentItem.querySelector('.social__picture').src = currentComment.avatar;
      commentItem.querySelector('.social__picture').alt = currentComment.name;
      commentItem.querySelector('.social__text').textContent = currentComment.message;
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

  const showPostData = (postData) => {
    picture.querySelector('img').src = postData.url;
    likes.textContent = postData.likes;
    caption.textContent = postData.description;
    comments.innerHTML = ''; //clear comments block
    commentsCount.textContent = postData.comments.length; //shows the number of comments

    commentLoaderButton.addEventListener('click', onGetNewComments);

    let pageNum = 0;

    const getComments = () => {
      const start = pageNum * NOTES_ON_PAGE;
      const end = start + NOTES_ON_PAGE;
      const commentsList = postData.comments.slice(start, end);
      showComments(commentsList, postData);

      const socialComment = document.querySelectorAll('.social__comment');
      if (+socialComment.length >= postData.comments.length) {
        commentLoaderButton.removeEventListener('click', onGetNewComments);
      }
    };
    getComments();

    function onGetNewComments () {
      pageNum++;
      getComments();
    }
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
