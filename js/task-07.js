// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');
// console.log(inputEl.value);
// console.log(spanTextEl.textContent);

inputEl.addEventListener('input', onChangeRange);

spanTextEl.style.fontSize = `${inputEl.value}px`;
// console.log(spanTextEl.style.fontSize)

function onChangeRange() {
    spanTextEl.style.fontSize = `${inputEl.value}px`;
 }

// console.log(inputEl.value)