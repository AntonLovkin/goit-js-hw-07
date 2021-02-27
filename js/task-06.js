// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
   
// console.log(inputEl);
// console.log(inputEl.value.length);
// console.log(Number(inputEl.getAttribute('data-length')));

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('focus', onInputFocus);

function onInputBlur() {
inputEl.value.length === Number(inputEl.getAttribute('data-length'))
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}

function onInputFocus() {
    inputEl.classList.remove('valid'),
    inputEl.classList.remove('invalid');
}
    
