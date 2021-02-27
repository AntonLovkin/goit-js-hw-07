// Напиши скрипт, который выполнит следующие операции.

// 1///Посчитает и выведет в консоль количество категорий 
//в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.
const numberOfItemsRef = document.querySelectorAll("li.item")

console.log(`В списке ${numberOfItemsRef.length} категории.`)

// 2 ///Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега h2) 

numberOfItemsRef.forEach(item => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`);

// и количество элементов в категории(всех вложенных в него элементов li).
 
    const categoriesItemsRef = item.querySelectorAll('li')
    console.log(`Кількість елементів: ${categoriesItemsRef.length}`);
})

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


   
  