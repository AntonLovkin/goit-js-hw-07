// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и
//   нажимает кнопку Создать, после чего рендерится коллекция.
//   При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// 1 параметр amount - число.Функция создает столько div,
//     сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть
// шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsBoxEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const inputEl = controlsBoxEl.firstElementChild;
const addButtonEl = document.querySelector('[data-action="render"]');
const clearButtonEl = document.querySelector('[data-action="destroy"]');
console.log();

addButtonEl.addEventListener('click', onAddButtonClick);
clearButtonEl.addEventListener('click', onClearButtonClick);

function onAddButtonClick() {
    let inputValue = inputEl.value;

    if (inputValue) {
        addButtonEl.setAttribute("disabled", "true") 
    };
    
    boxesEl.insertAdjacentHTML("beforeend", createBoxes(inputValue));
};

function onClearButtonClick() {
    boxesEl.innerHTML = '';
    addButtonEl.removeAttribute("disabled");
};

const createBoxes = (amount) => {
    let string = '';
    let width = 30;
    let height = 30;

    for (let i = 1; i <= amount; i += 1) {
        
        string += `<div style="
           background-color:${randomRgbColor()}; 
           width: ${width}px; 
           height: ${height}px"
        ></div>`;
        
        width += 10;
        height += 10;
    };
    return string;
};

function randomRgbColor () {
    const firstNum = Math.floor(Math.random() * 255);
    const secondNum = Math.floor(Math.random() * 255);
    const thirdNum = Math.floor(Math.random() * 255);

    return `rgb(${firstNum},${secondNum},${thirdNum})`;
};
