export default function showPictures() {
  const PICTURE_BLOCK = document.querySelector('.pictures');
  const PICTURE_TEMPLATE = document.querySelector('#picture');


  const FRAGMENT = new DocumentFragment();

  for(let i = 0; i < 5; i++) {
    const TEMPLATE_ITEM = PICTURE_TEMPLATE.content.cloneNode(true);

    TEMPLATE_ITEM.querySelector('.picture__img').src = `${i}-ind`;
    TEMPLATE_ITEM.querySelector('.picture__comments').innerText = 'sdfsdf';
    TEMPLATE_ITEM.querySelector('.picture__likes').innerText = 'hujsdfsdfsdf';

    FRAGMENT.append(TEMPLATE_ITEM);
  }

  console.log(FRAGMENT);

}
