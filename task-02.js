// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.createElement('ul');
ingredientsEl.classList.add('ingredients');
ingredientsEl.textContent = 'Ingredients';
console.log(ingredientsEl);

const listEl = document.querySelector('.ingredients');

const itemEl = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
    
  // console.log(itemRef)
  return itemRef;
         
});
// console.log(itemEl)
ingredientsEl.append(...itemEl);








