import getPosts from './get-posts.js';

export default function showPictures() {
  const PICTURE_BLOCK = document.querySelector('.pictures');
  const PICTURE_TEMPLATE = document.querySelector('#picture');
  const Posts = getPosts();

  const FRAGMENT = new DocumentFragment();

  for(let i = 0; i < Posts.length; i++) {
    const TEMPLATE_ITEM = PICTURE_TEMPLATE.content.cloneNode(true);

    TEMPLATE_ITEM.querySelector('.picture__img').src = `${Posts[i].url}`;
    TEMPLATE_ITEM.querySelector('.picture__comments').innerText = `${Posts[i].comments.length}`;
    TEMPLATE_ITEM.querySelector('.picture__likes').innerText = `${Posts[i].likes}`;

    FRAGMENT.append(TEMPLATE_ITEM);
  }

  PICTURE_BLOCK.append(FRAGMENT);
}
