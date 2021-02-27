// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.

// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса.

const refs = {
    addCounter : document.querySelector('[data-action="decrement"]'),
    removeCounter : document.querySelector('[data-action="increment"]'),
    showCounter : document.querySelector('#value')}

refs.addCounter.addEventListener('click', onDecrementBtnClc);
refs.removeCounter.addEventListener('click',onIncrementBtnClc);
let counterValue = 0;

function onDecrementBtnClc() {
    counterValue -= 1;
    refs.showCounter.textContent = counterValue;
};

function onIncrementBtnClc () {
    counterValue += 1;
    refs.showCounter.textContent = counterValue;
};