// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
    input: document.querySelector('#name-input'),
    spanName: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    refs.input.value === ''
        ? refs.spanName.textContent = 'незнакомец'
        : refs.spanName.textContent = refs.input.value;
 }

