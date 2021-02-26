const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//  Используй массив объектов images для создания 
// тегов img вложенных в li.
// Для создания разметки используй шаблонные 
// строки и insertAdjacentHTML().

//  Все элементы галереи должны добавляться 
// в DOM за одну операцию вставки.
//  Добавь минимальное оформление галереи 
// флексбоксами или гридами через css - классы.

//--------------------------------------------------------
const makeItemListMarup = ({url, alt}) => {
  return `<li> <img src=${url}, alt=${alt} class=gallery-item></li>`

}
const listEl = document.querySelector('#gallery');
listEl.classList.add('gallery-list');
listEl.width = 20;
// imageListRef.style.display = 'flex';
// imageListRef.style.justifyContent = 'space-between';
const makeItemList = images
  .map(makeItemListMarup)
  .join('');

listEl.insertAdjacentHTML('beforeend', makeItemList);
console.log(makeItemList);



