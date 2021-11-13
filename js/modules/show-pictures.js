const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

export const showPictures = (posts) => {
  const pictureElem = document.querySelectorAll('.picture');
  pictureElem.forEach((elem) => { //remowe old pictures elements
    elem.remove();
  });

  const fragment = new DocumentFragment();

  for(let i = 0; i < posts.length; i++) {
    const templateItem = pictureTemplate.content.cloneNode(true);

    templateItem.querySelector('.picture__img').src = posts[i].url;
    templateItem.querySelector('.picture__comments').textContent = posts[i].comments.length;
    templateItem.querySelector('.picture__likes').textContent = posts[i].likes;
    templateItem.querySelector('.picture').setAttribute('data-id', posts[i].id);

    fragment.append(templateItem);
  }

  pictureBlock.append(fragment);
};
