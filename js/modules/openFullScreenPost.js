export default function openFullScreenPost(posts) {
  const picturesBlock = document.querySelector('.pictures');
  const pictureElem = document.querySelectorAll('.picture');

  console.log(posts);

  const getCurrentPost = () => {
    picturesBlock.addEventListener('click', (evt) => {
      const postId = +(evt.target.parentElement.getAttribute('data-id'));
      posts.forEach((elem) => {
        if(elem.id === postId){
          console.log(elem);
        }
      });
    });
  };

  getCurrentPost();
}
