import getPosts from './get-posts.js';

export default function showPictures() {
  const PICTURE_BLOCK = document.querySelector('.pictures');
  const PICTURE_TEMPLATE = document.querySelector('#picture');
  const posts = getPosts();

  const FRAGMENT = new DocumentFragment();

  for(let i = 0; i < posts.length; i++) {
    const TEMPLATE_ITEM = PICTURE_TEMPLATE.content.cloneNode(true);

    TEMPLATE_ITEM.querySelector('.picture__img').src = `${posts[i].url}`;
    TEMPLATE_ITEM.querySelector('.picture__comments').innerText = `${posts[i].comments.length}`;
    TEMPLATE_ITEM.querySelector('.picture__likes').innerText = `${posts[i].likes}`;

    FRAGMENT.append(TEMPLATE_ITEM);
  }

  PICTURE_BLOCK.append(FRAGMENT);
}
